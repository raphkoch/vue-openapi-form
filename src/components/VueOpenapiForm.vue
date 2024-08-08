<template>
  <v-form ref="v-form" v-slot="{ meta, validate, errors }" as="">
    <ac-form>
      <div class="vue-openapi-form pl-20" :class="{ 'is-medium': size === 'medium' }">
        <v-field
          v-slot="{ field, handleChange }"
          v-model="modelData"
          :name="extendedSchema.title"
          :label="extendedSchema.title"
          :rules="ruleObject(true)"
          as=""
        >
          <schema-model
            :schema-model="{ schema: extendedSchema, model: modelValue }"
            @submit="handleFormSubmit"
          />
        </v-field>
      </div>
      <template #form-left-controls>
        <form-footer-control>
          <slot
            name="left-controls"
            :validate="validate"
            :form-status="meta"
            :errors="errors"
          />
        </form-footer-control>
      </template>
      <template #form-right-controls>
        <form-footer-control>
          <slot
            name="right-controls"
            :validate="validate"
            :form-status="meta"
            :errors="errors"
          />
          <!-- Pass modelValue to the Done button component -->
          <Button
            class="button ac-button is-primary"
            :modelValue="modelValue"
            data-testid="ac-create-button"
            title="Done"
          >
            <span class="icon is-small"><i class="fa fa-check" aria-hidden="true"></i></span>
            <span>Done</span>
          </Button>
        </form-footer-control>
      </template>
    </ac-form>
  </v-form>
</template>

<script>
import ExtendSchema from '../functional-components/extend-schema.js';
import validation from '../mixins/validation.js';
import { model } from '../mixins/model.js';
import { defineAsyncComponent, defineComponent } from 'vue';
import SchemaModel from './SchemaModel.vue';
import axios from 'axios'; 
export default defineComponent({
  name: 'VueOpenapiForm',
  components: {
    AcForm: defineAsyncComponent(() =>
      import('@appscode/design-system/vue-components/v3/form/Form.vue')
    ),
    FormFooterControl: defineAsyncComponent(() =>
      import(
        '@appscode/design-system/vue-components/v3/form/FormFooterControl.vue'
      )
    ),
    SchemaModel,
    Button: defineAsyncComponent(() =>
      import('@appscode/design-system/vue-components/v3/button/Button.vue')
    )
  },
  
  mixins: [model, validation],
  provide() {
    const providedData = {};

    // using defineProperty to make provide data reactive
    // ref : https://stackoverflow.com/a/65720394
    Object.defineProperty(providedData, 'theme', {
      enumerable: true,
      get: () => this.themeMode,
    });
    return {
      providedData,
    };
  },
  props: {
    schema: {
      type: Object,
      default: () => ({}),
    },
    modelValue: {
      type: Object,
      default: () => ({}),
    },
    formTitle: {
      type: String,
      default: '',
    },
    onlyJson: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'small',
    },
    themeMode: {
      type: String,
      default: 'light',
    },
  },
  computed: {
    extendedSchema() {
      return ExtendSchema(this.schema, this.formTitle);
    },
  },
  methods: {
    handleFormSubmit(updatedSchemaModel) {
      this.$emit('update:modelValue', updatedSchemaModel.model);
      // Additional handling if needed
    },
    async handleSubmit() {
      try {
        const response = await axios.post('', this.modelValue);
        console.log('Form submitted successfully:', response.data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
});
</script>

<style lang="scss">
@import 'font-awesome/css/font-awesome.min.css';
@import '../assets/scss/main.scss';
</style>
