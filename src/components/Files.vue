<template>
  <b-container>
    <b-row>
      <v-file-input accept="image/*" label="File input" v-model="uploadedFile"></v-file-input>
      <v-btn @click="uploadFile()">upload</v-btn>
    </b-row>

    <!-- 
        <ul>
          <transition-group
            name="list"
            enter-active-class="animated bounceInUp"
            leave-active-class="animated bounceOutDown"
          >
            <li v-for="(data, index) in files" :key="index">
              {{ data.name }}
              <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
            </li>
          </transition-group>
    </ul>-->
  </b-container>
</template>

<script>

import axios from 'axios'

export default {
  name: "Files",
  data() {
    return {
      file: "",
      uploadedFile: "",
      files: [{ name: "Vue.js" }, { name: "Frontend Developer" }]
    };
  },
  methods: {
    uploadFile() {
      if (this.uploadedFile) {
  
        let uploadFileEndpoint = `http://${process.env.VUE_APP_ENDPOINT_IP}:${process.env.VUE_APP_ENDPOINT_PORT}`
        let formData = new FormData();

        formData.append(this.uploadedFile, this.uploadedFile.name);
        console.log(this.uploadedFile);
        axios
          .post(uploadFileEndpoint, formData)
          .then(response => {
            console.log("Success!");
            console.log({ response });
          })
          .catch(error => {
            console.log({ error });
          });
      } else {
        console.log("there are no files.");
      }
    },
    download() {},
    preview() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float: right;
  cursor: pointer;
}
</style>
