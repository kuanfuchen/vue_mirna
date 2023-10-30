/* eslint-disable */
const handleQCfolder = ()=>{
  // const openQC_folder = '../assets/miRNA-seq/Bowtie2/00. QC (Trim adaptor & Trim base)';
  // console.log(openQC_folder, 'openQC_folder')
  const fileReaderQC = new FileReader();
  const remove_space = /\s*\n/;
  const str = /\s*\t/;
  const saveQCtableValue = [];
  fileReaderQC.readAsText('../assets/miRNA-seq/Bowtie2/00.QC (Trim adaptor & Trim base)/01. Raw reads/pre_alignment_qaqc.txt');
  fileReaderQC.onload = (e) => {
    const fileReaderQCResult = fileReaderQC.result;
    const fileReaderQCResultFilter = fileReaderQCResult.split(remove_space);
    for(let i=1;fileReaderQCResultFilter.length> i ;i++){
      saveQCtableValue.push(fileReaderQCResultFilter[i].split(str))
    }
  }
  console.log(saveQCtableValue)
}
export const dataService = {
  handleQCfolder
} 