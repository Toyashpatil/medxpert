import React from 'react'
import Input from '../components/Input'
import Docpho from "../assets/Images/docphoto.svg"
import leftarrow from "../assets/Images/Left Arrow.png"
function doctors() {
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
  return (
    <div className='h-fit gradient_wall p-4 flex items-start justify-center  w-[100vw]'>
            <div className=' w-[100%] space-y-2'>
                {/* <div></div> */}
                <div className=' flex items-centre justify-start'>
                    <img src={leftarrow}></img>
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
                <div style={parentStyles}>
                    <div style={childStyles}>
                        <div className='flex items-center justify-center'><img src={Docpho}></img></div>
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>
                    <div style={childStyles}>
                    <div className='flex items-center justify-center'><img src={Docpho}></img></div>
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>
                </div>
                <div style={parentStyles}>
                    <div style={childStyles}>
                        <div className='flex items-center justify-center'><img src={Docpho}></img></div>
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>
                    <div style={childStyles}>
                    <div className='flex items-center justify-center'><img src={Docpho}></img></div>
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>
                </div>
                <div style={parentStyles}>
                    <div style={childStyles}>
                        <div className='flex items-center justify-center'><img src={Docpho}></img></div>
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>
                    <div style={childStyles}>
                    <div className='flex items-center justify-center'><img src={Docpho}></img></div>
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>
                </div>
                <div style={parentStyles}>
                    <div style={childStyles}>
                        <div className='flex items-center justify-center'><img src={Docpho}></img></div>
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>
                    <div style={childStyles}>
                    <div className='flex items-center justify-center'><img src={Docpho}></img></div>
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>
                </div>
                <div style={parentStyles}>
                    <div style={childStyles}>
                        <div className='flex items-center justify-center'><img src={Docpho}></img></div>
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>
                    <div style={childStyles}>
                    <div className='flex items-center justify-center'><img src={Docpho}></img></div>
                        <div className='flex items-center justify-center'><h1>Dr.Patil</h1></div>
                        <div className='flex items-center justify-center'><h2>Dermatologist</h2></div>
                        <div className='flex items-center justify-center'>4.5★ (120 reviews)</div>
                    </div>
                </div>
                </div>
            </div>
   </div>
  )
}

export default doctors