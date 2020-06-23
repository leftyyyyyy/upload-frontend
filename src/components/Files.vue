<template>
  <b-container>
    <b-row class="upload">
      <v-file-input accept="csv/*" label="File input" v-model="uploadedFile"></v-file-input>
      <v-btn @click="uploadFile()" class="uploadBtn">upload</v-btn>
    </b-row>

    <b-row>
      <v-expansion-panels>
        <v-expansion-panel v-for="(file,index) in files" :key="index">
          <v-expansion-panel-header>
            {{file.Name}}
            <b-col>
              <v-btn
                @click.native.stop="downloadFile($event, file.Name)"
                :id="file.Identifier"
                icon
                class="icon"
              >
                <v-icon>mdi-file-download</v-icon>
              </v-btn>
            </b-col>
          </v-expansion-panel-header>
          <v-expansion-panel-content>{{file.Stats}}</v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </b-row>

    <v-snackbar v-model="isUploading">
      Your file is uploading . . .
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="isUploading = false">Close</v-btn>
      </template>
    </v-snackbar>

    <v-snackbar v-model="isMsg">
      {{ userMsg }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="isMsg = false">Close</v-btn>
      </template>
    </v-snackbar>
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
      files: [],
      isUploading: false,
      isMsg: false,
      userMsg: ""
    };
  },
  methods: {
    uploadFile() {
      if (this.uploadedFile) {
        const uploadFileEndpoint = `/upload`;
        let formData = new FormData();
        this.isUploading = true;

        formData.append("file", this.uploadedFile);

        axios
          .post(uploadFileEndpoint, formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            if (!Object.keys(response.data).length === 0) {
              this.files.push(response.data);
              this.userMsg = "Successfully uploaded!";
            } else {
              this.userMsg = "Unsuccessful upload!";
            }
            this.isMsg = true;
            this.isUploading = false;
          })
          .catch(error => {
            this.isUploading = false;
            this.userMsg = error.message;

            this.isMsg = true;
          });
      } else {
        this.userMsg = "There is no file.";
        this.isMsg = true;
      }
    },
    downloadFile(e, name) {
      const downloadFileEndpoint = `/download`;

      const params = { file_identifier: e.currentTarget.id };

      axios
        .get(downloadFileEndpoint, { params })
        .then(response => {
          let fileURL = window.URL.createObjectURL(new Blob([response.data]));
          let fileLink = document.createElement("a");
          fileLink.href = fileURL;
          fileLink.setAttribute("download", name);
          document.body.appendChild(fileLink);
          fileLink.click();
        })
        .catch();
    },
    preview() {}
  },
  mounted() {
    const fetchFilesEndpoint = `/fetchfiles`;

    axios
      .get(fetchFilesEndpoint)
      .then(response => {
        this.files = response.data;
      })
      .catch();
  }
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.uploadBtn {
  margin: 0.75rem;
}

.icon {
  float: right;
  cursor: pointer;
}

.col {
  padding: 0px;
}
</style>
