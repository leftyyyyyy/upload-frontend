<template>
  <b-container>
    <b-row>
      <v-file-input accept="csv/*" label="File input" v-model="uploadedFile"></v-file-input>
      <v-btn @click="uploadFile()">upload</v-btn>
    </b-row>

    <b-row>
      <v-expansion-panels>
        <v-expansion-panel v-for="(file,index) in files" :key="index">
          <v-expansion-panel-header>
            {{file.Name}}
            <v-col cols="12" sm="3">
              <v-btn @click="downloadFile($event)" :id="file.Identifier" icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>
          </v-expansion-panel-header>
          <v-expansion-panel-content></v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Files",
  data() {
    return {
      file: "",
      uploadedFile: "",
      files: []
    };
  },
  methods: {
    uploadFile() {
      if (this.uploadedFile) {
        let uploadFileEndpoint = `/upload`;
        let formData = new FormData();

        formData.append("file", this.uploadedFile);

        axios
          .post(uploadFileEndpoint, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            console.log("Success!");
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        console.log("there are no files.");
      }
    },
    downloadFile(e) {
      console.log(e.currentTarget.id)
    },
    preview() {}
  },
  mounted() {
    let fetchFilesEndpoint = `/fetchfiles`;

    axios
      .get(fetchFilesEndpoint)
      .then(response => {
        console.log("mounted!");
        this.files = response.data;
        console.log("res ", response.data[0].Name);
      })
      .catch(error => {
        console.log("mounting error", error);
      });
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
