<template>
  <div id="app">
    <div id="header" class="ac-navbar-area is-full is-fixed ml-0">
      <div class="ac-navbar-inner">
        <!-- navbar start  -->
        <nav class="ac-navbar">
          <!-- navbar logo start  -->
          <div class="ac-navbar-brand">
            <a href="https://byte.builders/">
              <img
                src="https://cdn.appscode.com/images/products/bytebuilders/bytebuilders.png"
              />
            </a>
            <strong>(Vue OpenAPI Form)</strong>
          </div>
          <!-- navbar logo end -->

          <!-- navbar menus start  -->
          <div class="ac-navbar-menu">
            <!-- single navbar menu item start  -->
            <div class="ac-menu-item">
              <a
                href="https://github.com/appscode/vue-openapi-form"
                class="button ac-nav-button"
              >
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
            <!-- single navbar menu item end  -->
          </div>
          <!-- navbar menus end -->
        </nav>
        <!-- navbar end -->
      </div>
    </div>

    <div class="vue-form-scema-body mt-50">
      <div class="is-flex gap-20">
        <div class="left-content">
          <div class="left-content-wrapper">
            <div v-if="!modifiedSchema" class="select-box-wrapper">
              <h5 class="mb-10 is-block">Select Schema</h5>
              <div class="select is-fullwidth">
                <select id="schema-selection" v-model="selectedJsonSchema">
                  <option
                    v-for="schema in jsonSchemas"
                    :key="schema.title"
                    :value="schema"
                  >
                    {{ schema.title }}
                  </option>
                </select>
              </div>
            </div>
            <div v-else class="level">
              <div class="level-left">Schema has been modified</div>
              <div class="level-right">
                <button class="button is-warning" @click.prevent="resetForm()">
                  Reset
                </button>
              </div>
            </div>
            <schema-model
              :key="JSON.stringify(selectedJsonSchema)"
              :schema-model="selectedJsonSchema"
              @submit="updateSchema"
            />
          </div>
        </div>
        <div class="right-content">
          <vue-openapi-form
            ref="vof"
            :key="JSON.stringify(selectedJsonSchema)"
            v-model="model"
            class="ml-10"
            :schema="jsonSchema"
            :reference-model="referenceModel || ''"
            :form-title="formTitle"
          >
            <!-- Left Controls -->
            <template #left-controls>
              <ac-button
                title="Cancel"
                modifier-classes="is-outlined is-danger"
                @click.prevent="cancelFunc"
              />
            </template>
            
            <!-- Right Controls -->
            <template #right-controls="{ validate }">
                  <div class="form-footer-control">
                    <ac-button
                      title="Done"
                      :is-loader-active="isLoading"
                      icon-class="check"
                      @click.prevent="submitFunc(validate)"
                    />
                    <ac-button
                      title="Submit"
                      class="ml-10"
                      :is-loader-active="isLoading"
                      icon-class="send"
                      @click.prevent="submitData(validate)"
                    />
                  </div>
                </template>
              </vue-openapi-form>
            </div>

        <ac-button
          title="Call Validate"
          :is-loader-active="isLoading"
          icon-class="check"
          class="mt-50"
          @click.prevent="callValidate"
        />
      </div>
    </div>
  </div>
</template>


<script>
import Schemas from '@/json-schema.js';
import { defineAsyncComponent, defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'App',
  components: {
    VueOpenapiForm: defineAsyncComponent(() =>
      import('@/components/VueOpenapiForm.vue').then((module) => module.default)
    ),
    SchemaModel: defineAsyncComponent(() =>
      import('@/components/SchemaModel.vue').then((module) => module.default)
    ),
    AcButton: defineAsyncComponent(() =>
      import('@appscode/design-system/vue-components/v3/button/Button.vue')
    ),
  },

  data() {
    return {
      jsonSchemas: Schemas,
      selectedJsonSchema: Schemas[0],
      jsonSchema: {},
      model: {},
      referenceModel: {},
      formTitle: '',
      modifiedSchema: false,
      isLoading: false,
    };
  },

  watch: {
    selectedJsonSchema: {
      deep: true,
      immediate: true,
      async handler(newVal) {
        this.jsonSchema = JSON.parse(JSON.stringify(newVal.schema));
        await setTimeout(() => {
          this.model = JSON.parse(JSON.stringify(newVal.model));
          this.referenceModel = JSON.parse(JSON.stringify(this.model));
        }, 2000);
        this.formTitle = newVal.title;
      },
    },
  },

  methods: {
    updateSchema(e) {
      this.modifiedSchema = true;
      this.selectedJsonSchema = e;
    },
    resetForm() {
      this.modifiedSchema = false;
      this.selectedJsonSchema = Schemas[0];
    },
    cancelFunc() {
      console.log('form is canceled');
    },
    async submitFunc(validate) {
      this.isLoading = true;
      const { valid } = await validate();
      if (valid) {
        console.log('form is valid');
      } else {
        console.log('form is invalid');
      }
      this.isLoading = false;
    },
    async submitData(validate) {
      this.isLoading = true;
      const { valid } = await validate();
      if (valid) {
        try {
          const response = await axios.post(
            'http://localhost:3003/v1/measurement',
            this.model
          );
          console.log('Form submitted successfully:', response.data);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      } else {
        console.log('form is invalid');
      }
      this.isLoading = false;
    },
    async callValidate() {
      const { valid } = await this.$refs.vof.$refs['v-form'].validate();
      console.log(valid);
    },
  },
});
</script>

<style lang="scss" scoped>
.ac-navbar-area {
  &.is-full {
    margin-left: 0;

    .ac-navbar {
      grid-template-columns: 500px auto;
      width: 100%;
      gap: 20px;
      .ac-navbar-brand {
        padding-left: 15px;
      }
    }
  }

  .ac-navbar {
    display: inline-grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 20px;

    .ac-navbar-brand {
      display: flex;
      align-items: center;
      .logo {
        font-size: 20px;
        font-weight: 600;
        color: $white-100;
      }

      img {
        height: 30px;
      }
    }
    .ac-navbar-cluster-switcher {
      max-width: 350px;
    }
    .ac-navbar-menu {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .ac-menu-item {
        position: relative;
        z-index: 1;
      }
    }
  }
}
// for sidebar-collapsed
.sidebar-collapsed {
  .ac-navbar {
    .ac-navbar-brand {
      padding-left: 70px !important;
    }
  }
}
</style>
