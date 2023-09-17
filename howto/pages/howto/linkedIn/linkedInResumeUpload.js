import React from 'react'
// import { useRouter } from 'next/router'
import Image from 'next/image'
import resume01 from '@/pages/howto/linkedIn/resume_img01.png'
import resume02 from '@/pages/howto/linkedIn/resume_img02.png'
import resume03 from '@/pages/howto/linkedIn/resume_img03.png'

function index() {
    // const router = useRouter()
    // const slug = router.query.slug

    return (

        <div>
            <h3>How to upload Resume in linked In</h3>
            <h2> Pease follow the below steps</h2>
            <h4>Step 1: </h4>
            <p>Login to your LinkedIn Profile</p>
            <p>Click on your profile Icon. A Drop down box will pop up</p>
            <p>select <strong>Settins & Privacy</strong> as shown in the below</p>
            <Image src={resume01} width={800} height={800} />
            <h4>Step 2: </h4>
            <p>Setting and Privacy page will appear</p>
            <p>Select <strong>Data Privacy</strong> from the left panel</p>
            <p>You will see <strong>Job seeking preferences</strong> section. under this section click on <strong>Job applications settings</strong> as shown below</p>
            <Image src={resume02} width={800} height={800} />
            <h4>Step 3: </h4>
            <p>Job applications settins page will appear</p>
            <p>Enable the <strong>Share your resume data with all recruiters</strong> option. So that recruiters can see your resume</p>
            <p>upload your resume by clicking <strong>Upload resume</strong>. Select your resume from your device(laptop)</p>
            <Image src={resume03} width={800} height={800} />
            <h2>You are Done!!</h2>

        </div>
    )
}

export default index