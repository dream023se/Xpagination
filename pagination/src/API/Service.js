import axios from 'axios';

export const getEmployeeData = async()=>{

    try{
    const response = await axios.get(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)

    

    return response.data;

    }
    catch(error)
    {
        console.log('Error handling message', error)
    }
};
