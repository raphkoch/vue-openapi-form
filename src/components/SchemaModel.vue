<template>
  <div class="schema-model-wrapper mt-30">
    <div class="schema-input mb-30">
      <h5 class="mb-15">Schema</h5>
      <monaco-editor
        :value="schema"
        language="json"
        class="editor-writable vh-50 is-clipped"
        :options="{
          minimap: {
            enabled: false,
          },
          theme: editorTheme,
          readOnly: false,
        }"
        @change="onSchemaChange"
      />
      <p v-if="schemaError" class="is-warning mt-10">
        <span class="warning"><i class="fa fa-warning"></i></span>
        The format is not correct
      </p>
    </div>

    <div class="model-input">
      <h5 class="mb-15">Model</h5>
      <monaco-editor
        :value="model"
        language="json"
        class="editor-writable vh-50 is-clipped"
        :options="{
          minimap: {
            enabled: false,
          },
          theme: editorTheme,
          readOnly: false,
        }"
        @change="onModelChange"
      />
      <p v-if="modelError" class="is-warning mt-10">
        <span class="warning"><i class="fa fa-warning"></i></span>
        The format is not correct
      </p>
    </div>

    <div v-if="parsedSchema" class="form-fields mt-30">
      <h5 class="mb-15">Form</h5>
      <div v-for="(property, name) in parsedSchema.properties" :key="name" class="form-field">
        <label :for="name">{{ name }}</label>
        <div v-if="property.enum">
          <select v-model="formData[name]">
            <option v-for="option in property.enum" :key="option" :value="option">{{ option }}</option>
          </select>
        </div>
        <div v-else>
          <input type="text" v-model="formData[name]" :id="name" />
        </div>
      </div>
    </div>

    <div class="buttons mt-20">
      <button class="button ac-button is-primary" @click.prevent="updateForm()">
        Update
      </button>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'SchemaModel',

  components: {
    MonacoEditor: defineAsyncComponent(() =>
      import(
        '@appscode/design-system/vue-components/v3/editor/MonacoEditor.vue'
      ).then((module) => module.default)
    ),
  },
  props: {
    schemaModel: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['submit'],

  data() {
    return {
      schema: '',
      model: '',
      formData: {},
      schemaError: false,
      modelError: false,
    };
  },

  computed: {
    editorTheme() {
      return document.documentElement.classList.contains('is-dark-theme')
        ? 'vs-dark'
        : 'vs';
    },
    parsedSchema() {
      try {
        return JSON.parse(this.schema);
      } catch {
        return null;
      }
    },
    parsedModel() {
      try {
        return JSON.parse(this.model);
      } catch {
        return null;
      }
    },
  },

  watch: {
    schemaModel: {
      deep: true,
      immediate: true,
      handler() {
        this.initSchemaModel();
      },
    },
    schema() {
      this.schemaError = false;
    },
    model() {
      this.modelError = false;
    },
  },

  created() {
    this.initSchemaModel();
  },

  methods: {
    initSchemaModel() {
      this.schema = JSON.stringify(this.schemaModel.schema, null, 2);
      this.model = JSON.stringify(this.schemaModel.model, null, 2);
      this.formData = { ...this.schemaModel.model };
    },

    updateForm() {
      const newOb = { ...this.schemaModel };
      try {
        newOb.schema = JSON.parse(this.schema);
        this.schemaError = false;
      } catch {
        newOb.schema = this.schemaModel.schema;
        this.schemaError = true;
      }

      try {
        newOb.model = JSON.parse(this.model);
        this.modelError = false;
      } catch {
        newOb.model = this.schemaModel.model;
        this.modelError = true;
      }

      if (!this.schemaError && !this.modelError) {
        this.$emit('submit', newOb);
      }
    },

    onSchemaChange(e) {
      if (typeof e === 'string') this.schema = e;
    },
    onModelChange(e) {
      if (typeof e === 'string') this.model = e;
    },
  },
});
</script>

<style scoped>
.schema-model-wrapper {
  padding: 20px;
}

.editor-writable {
  border: 1px solid #ccc;
  border-radius: 4px;
}

.is-warning {
  color: #ffcc00;
}

.form-fields {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
  margin-top: 20px;
}

.form-field {
  margin-bottom: 15px;
}

.form-field label {
  display: block;
  margin-bottom: 5px;
}

.form-field select,
.form-field input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
