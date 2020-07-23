import { Document } from "react-pdf";
import { useRecoilValue } from 'recoil';
import { resumeState } from "../_recoil";

const useResume = () => ({
    resume: useRecoilValue(resumeState),
})

function Resume() {
    return (
        <Resume data={this.state.resumeData.resume} />
    )

}

export default Resume;