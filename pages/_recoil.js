import { atom } from 'recoil';

export const resumeState = atom({
    key: 'resume',
    data: getResumeData(),
})

getResumeData(){
    return "";
}