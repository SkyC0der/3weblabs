import React, { useState } from 'react'
import axios from 'axios'
import Modal from '../../../components/Modal'
import Input from '../../../components/Input'
import Button from '../../../components/Button/Primary'
import SelectInput from '../../../components/Select'
import TextArea from '../../../components/TextArea'
import { API_URL } from '../../../utils/constants'


interface IUser {
  first_name: string,
  last_name: string,
  skills: string,
  portfolio_link: string,
  social_link: string,
  bio: string,
  resume: any | File,
  country: string
}
export default function JoinUs(props: any) {

  const [joinUsForm, setJoinUsForm] = useState<IUser>({
    first_name:'',
    last_name:'',
    skills: '',
    portfolio_link:'',
    social_link:'',
    bio:'',
    resume : null,
    country: 'Nigeria'
    })


    const [submiting, setSubmiting] = useState(false);

  const skilssOption = [
    { value: '', display: 'Select a max of two skills'},
    { value:'Product Desgin',display: 'Product Desgin' },
    { value: 'Frontend Development',display: 'Frontend Development' },
    { value: 'Backend Development',display: 'Backend Development' },
    { value: 'Solidity Smart Contracts',display: 'Solidity Smart Contract'},
    { value: 'Rust Smart Contract',display: 'Rust Smart Contract' },
    { value: 'Plutus Smart Contract',display: 'Plutus Smart Contract' },
    { value: 'Mobile Development',display: 'Mobile Development' },
    { value: 'Content Writing',display: 'Content Writing'}
  ]

  async function sendJoinRequest() {
    setSubmiting(true);
    const url = `${API_URL}/talents`

    try {
      const formData = new FormData();

      formData.append('resume', joinUsForm.resume);
      formData.append('first_name', joinUsForm.first_name);
      formData.append('last_name', joinUsForm.last_name);
      formData.append('skills', joinUsForm.skills);
      formData.append('portfolio_link', joinUsForm.portfolio_link);
      formData.append('social_link', joinUsForm.social_link);
      formData.append('bio', joinUsForm.bio);
      formData.append('country', joinUsForm.country);

      const response = await axios.post(url, formData)
      setSubmiting(false);

      setJoinUsForm({
        first_name: '',
        last_name: '',
        skills: '',
        portfolio_link: '',
        social_link: '',
        bio: '',
        resume: null,
        country: '',
      })

      alert('Upload successful');
    } catch (error) {
        alert('Failed')
        setSubmiting(false);

    }

  }
  function handleInputChange(event: any) {
    const { value, name } = event.target;

    setJoinUsForm(prev => ({
      ...prev,
      [name]: value
    }))
  }


  function selectFile(){
       document?.getElementById('cv-upload')?.click();
  }

  async function fileInputChanged(event: any){
    const files = (event.target.files)
    // event.target.value = ''
    if (files?.length === 0) {
      
      
    } else {
        const file = files?.[0];
        if(file){
          await setJoinUsForm(() => {
           return {
             ...joinUsForm,
             resume:file
           }
          });
         event.target.value = ''
          // returnFileSize(file.size);
        }
    }
  }


  function returnFileSize(number: any ) {
    if (number < 1024) {
      return `${number} bytes`;
    } else if (number >= 1024 && number < 1048576) {
      return `${(number / 1024).toFixed(1)} KB`;
    } else if (number >= 1048576) {
      return `${(number / 1048576).toFixed(1)} MB`;
    }
  }


  return (
    <Modal onClose={() => {props.closed()}} show={props.show}>
      <Input type="file" onChange={fileInputChanged} placeholder="Portfolio Link" required className="hidden" name="cv" id="cv-upload" accept=".jpg, .jpeg, .pdf"  />
      <div className="sm:p-4 p-8">
        <h3 className="font-semibold text-center">Are you competent in your field? Join us now!</h3>


        <div className="my-4">
          
          <form className="grid grid-rows-8 grid-cols-2 gap-2">
            <Input type="text" onChange={handleInputChange}  placeholder="First Name" required value={joinUsForm.first_name} name="first_name"/>
            <Input onChange={handleInputChange} type="text" placeholder="Last Name" required value={joinUsForm.last_name} name="last_name"/>
            <SelectInput onChange={handleInputChange} containerClassName="col-span-2" name="skills" value={joinUsForm.skills} options={skilssOption} />
            <Input type="text" onChange={handleInputChange} placeholder="Portfolio Link" required value={joinUsForm.portfolio_link} name="portfolio_link"/>
            <Input type="text" onChange={handleInputChange} placeholder="Social link" name="social_link" required value={joinUsForm.social_link} />
            <div className="col-span-2 flex items-center relative my-2" >
              {/* <Input type="file" placeholder="Social link" required /> */}
              <div className="border-2 border-[#C1D6E9] p-3 w-full rounded-md text-slate-500 text-sm overflow-x max-h-12">{joinUsForm.resume?.name ? joinUsForm.resume?.name: 'No file Selected'}</div>
              <Button type="button" className="border-0 rounding-none absolute right-[-8px]" onClick={() => selectFile()}>Upload CV</Button>
              
            </div>
            <TextArea onChange={handleInputChange} containerClassName="col-span-2" name="bio" placeholder='Bio' value={joinUsForm.bio}/>
            <Button type="button" className="col-span-2 h-auto" onClick={sendJoinRequest} loading={submiting} disabled={submiting}>{submiting ? 'Processing' : 'Submit'}</Button>
          </form>
        </div>
      </div>
    </Modal>
  )
}
