<template>
  <q-page class="q-mt-md q-mx-sm">
    <q-card flat bordered class="my-card tableBackground" >
      <q-card-section>
        <div class="text-h4 q-mb-md text-teal text-bold">Project Information</div>
        <q-separator  />
      </q-card-section>
      <q-card-section class="q-pt-none" v-for="( userInfo, index ) in projectUsrInfo.userInfoOrder" :key="index">
        <div class="row">
          <p class="col-md-4 col-xl-3 text-h6 text-green-8">{{ userInfo }}</p>
          <p class="col-md-8 col-xl-9 text-h6">{{ projectUsrInfo[userInfo] }}</p>
        </div>
        <q-separator v-if="index < projectUsrInfo.userInfoOrder.length - 1" />
      </q-card-section>
      <img src="../assets/img/xxx.jpg" style="width:200px">
    </q-card>
  </q-page>
</template>
<script setup>
/* eslint-disable */
import { ref } from 'vue';
import axios from 'axios';
// import JSZip from 'jszip'
// import FileSaver from 'file-saver'
const projectUsrInfo = ref({
  userInfoOrder: ['Organism','PONumber', 'Institute', 'Customer','Tel','kit','Genome', 'miRNA DB', 'date'],
  Organism:'xxx',
  PONumber:'0000001',
  Institute:'xx大學',
  Customer:'xxx',
  Tel:'',
  kit:'kit',
  Genome:'PDE',
  'miRNA DB': 'v22',
  date:'12/11'
})
const backgrundPlant = ref('dark');
const createZip = () => {
  console.log('231')
  // const zip = new JSZip()
  axios.get('/').then((response)=>{
    console.log(response)
  })
  // const addFolderToZip = async (zip, folderPath, parentFolderName = '') => {
  //   console.log(folder)
    // const files = await this.loadFiles(folder)
    // console.log(files)
    // for (const file of files) {
    // if (file.isDirectory) {
    // const subfolderName = path.join(parentFolderName, file.name);
    //       const subfolder = zip.folder(subfolderName);
    //       await addFolderToZip(subfolder, path.join(folderPath, file.name), subfolderName);
    //     } else {
    //       const fileContent = await this.loadFileContent(path.join(folderPath, file.name));
    //       const relativeFilePath = path.join(parentFolderName, file.name);
    //       zip.file(relativeFilePath, fileContent);
    //     }
    // }
  // }
  // await addFolderToZip()
  // const link = document.createElement('a');
  // link.href="../assets/img/01. Raw reads.png";
  // link.download = 'new.zip';
  // link.click();
}

// export default defineComponent({
//   name: 'IndexPage'
// })
</script>
<style scoped>
  .tableBackground{
    background:#eceff1;
  }
</style>
