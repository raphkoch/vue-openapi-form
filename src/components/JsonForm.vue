<template>
  <div class="ml-30">
    <!-- The JSON editor -->
    <editor
      :key="theme"
      v-model="editorModel"
      :original-value="originalValueString"
      language="json"
      :editor-height="300"
    />
    <!-- The Submit Button -->
    <div>
      <button @click="handleSubmit">Submit</button>
    </div>
  </div>
</template>

<script>
import { model } from '../mixins/model.js';
import { defineAsyncComponent, defineComponent } from 'vue';
import axios from 'axios'; 

export default defineComponent({
  name: 'JsonForm',

  components: {
    Editor: defineAsyncComponent(() =>
      import('@appscode/design-system/vue-components/v3/editor/Editor.vue')
    ),
  },

  mixins: [model],
  inject: ['providedData'],
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },

  emits: ['code::model-data-updated', 'submit'], // Ensure that 'submit' event is listed here

  computed: {
    // Original value of the JSON model as a formatted string
    originalValueString() {
      return JSON.stringify(this.referenceModel, null, 2);
    },
    // Theme based on the injected providedData
    theme() {
      return this.providedData.theme || 'light';
    },
    // The editor model in string form
    editorModel: {
      get() {
        return JSON.stringify(this.modelValue, null, 2);
      },
      set(n) {
        let ans = null;
        try {
          ans = JSON.parse(n); // Parse the JSON string to a JavaScript object
        } catch (e) {
          ans = this.modelData; // If parsing fails, revert to the existing model data
        }
        // Update the internal modelData and emit an event
        this.modelData = ans;
        this.$emit('code::model-data-updated', ans);
      },
    },
  },

  methods: {
    // Method to handle form submission
    async handleSubmit() {
      try {
        // Adjust the URL to point to your server's endpoint
        const response = await axios.post('http://localhost:3003/v1/measurement', this.modelValue);
        console.log('Form submitted successfully:', response.data);
        this.$emit('submit', this.modelValue); // Emit the submit event with modelValue data
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
});
</script>

<style>
.ml-30 {
  margin-left: 30px;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
