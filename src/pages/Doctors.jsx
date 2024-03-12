import React,{useState,useEffect} from 'react'
import Input from '../components/Input'
import Docpho from "../assets/Images/docphoto.svg"
import leftarrow from "../assets/Images/Left Arrow.png"
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
function Doctors() {
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
    const doctorsData = [
        { name: "Dr. Patil", specialization: "Dermatologist", rating: "4.5★ (120 reviews)" },
        { name: "Dr. Smith", specialization: "Cardiologist", rating: "4.8★ (200 reviews)" },
        { name: "Dr. Johnson", specialization: "Pediatrician", rating: "4.7★ (150 reviews)" },
        { name: "Dr. Brown", specialization: "Orthopedic Surgeon", rating: "4.6★ (180 reviews)" },
        { name: "Dr. Martinez", specialization: "Neurologist", rating: "4.9★ (220 reviews)" },
        { name: "Dr. Lee", specialization: "Ophthalmologist", rating: "4.6★ (160 reviews)" },
        { name: "Dr. Garcia", specialization: "Gynecologist", rating: "4.7★ (190 reviews)" },
        { name: "Dr. Robinson", specialization: "Endocrinologist", rating: "4.8★ (210 reviews)" },
        { name: "Dr. White", specialization: "Psychiatrist", rating: "4.9★ (230 reviews)" },
        { name: "Dr. Khan", specialization: "Gastroenterologist", rating: "4.5★ (140 reviews)" }
    ];
    return (
        <div className='h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]'>
            <div className=' w-[100%] space-y-2'>
                {/* <div></div> */}
                <div className=' flex items-centre justify-start'>
                    <img onClick={() => { navigate(-1) }} src={leftarrow}></img>
                </div>
                <div className=' flex items-center justify-center'>
                    <h1 className='text-3xl font-extrabold '>Doctors</h1>
                </div>
                <div className=' space-y-2 '>
                    <div className='flex items-center justify-center'>
                        <Input type="text" name="fullname" placeholder="⌕ Search doctors" />
                    </div>
                </div>
                <div className=' items-center justify-center'>
                    {doctorsData.map((doctor, index) => (
                        <div onClick={() => {
                            navigate('/appointment', {
                                state: {
                                    name: doctor.name,
                                    spec: doctor.specialization,
                                    rating: doctor.rating
                                }
                            })
                        }} key={index} style={parentStyles}>
                            <div style={childStyles}>
                                <div className='flex items-center justify-center'><img src={Docpho} alt="Doctor" /></div>
                                <div className='flex items-center justify-center'><h1>{doctor.name}</h1></div>
                                <div className='flex items-center justify-center'><h2>{doctor.specialization}</h2></div>
                                <div className='flex items-center justify-center'>{doctor.rating}</div>
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

export default Doctors