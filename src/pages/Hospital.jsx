import React,{useState,useEffect} from 'react'
import Input from '../components/Input'
import callpho from "../assets/Images/Callphone.svg"
import leftarrow from "../assets/Images/Left Arrow.png"
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
function Hospital() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    if (isLoading) {
        return <Loader />;
    }
    const parentStyles = {
        display: 'flex',
        justifyContent: 'center',
    };

    const childStyles = {
        flex: '1 1 45%',
        backgroundColor: '#C6C6F1',
        margin: '20px',
        padding: '2px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
    const hospitalData = [
        { name: "Fortis Hospital", address: "Mulund, Mumbai", rating: "4.5★" },
        { name: "Jupiter Hospital", address: "Thane", rating: "4.8★" },
        { name: "Hiranandani Hospital", address: "Powai, Mumbai", rating: "4.7★" },
        { name: "SevenHills Hospital", address: "Andheri East, Mumbai", rating: "4.3★" },
        { name: "Kohinoor Hospital", address: "Kurla West, Mumbai", rating: "4.6★" },
        { name: "Aster Prime Hospital", address: "Dombivali", rating: "4.4★" },
        { name: "Apollo Hospital", address: "Belapur, Navi Mumbai", rating: "4.9★" },
        { name: "Jai Matadi Hospital", address: "Kalyan", rating: "4.2★" },
        { name: "Sparsh Hospital", address: "Thane West", rating: "4.5★" },
        { name: "Shree Hospital", address: "Kalyan East", rating: "4.6★" }
    ];
    return (
        <div className='h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]'>
            <div className=' w-[100%] space-y-2'>
                {/* <div></div> */}
                <div className=' flex items-centre justify-start'>
                    <img onClick={() => { navigate(-1) }} src={leftarrow}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold '>Hospitals</h1>
                </div>
                <div className=' space-y-2 '>
                    <div className='flex items-center justify-center'>
                        <Input type="text" name="fullname" placeholder="⌕ Search hospitals" />
                    </div>
                </div>
                <div className=' items-center justify-center'>
                    {hospitalData.map((hospital, index) => (
                        <div onClick={() => {
                            navigate('/appointment', {
                                state: {
                                    name: hospital.name,
                                    spec: hospital.specialization,
                                    rating: hospital.rating
                                }
                            })
                        }} key={index} style={parentStyles}>
                            <div style={childStyles}>
                                <div className='flex items-center justify-center'><img src={callpho} alt="Doctor" /></div>
                                <div className='flex items-center justify-center'><h1>{hospital.name}</h1></div>
                                <div className='flex items-center justify-center'><h2>{hospital.address}</h2></div>
                                <div className='flex items-center justify-center'>{hospital.rating}</div>
                            </div>
                            {/* <div style={childStyles}>
                                <div className='flex items-center justify-center'><img src={Docpho} alt="Doctor" /></div>
                                <div className='flex items-center justify-center'><h1>{doctor.name}</h1></div>
                                <div className='flex items-center justify-center'><h2>{doctor.specialization}</h2></div>
                                <div className='flex items-center justify-center'>{doctor.rating}</div>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hospital