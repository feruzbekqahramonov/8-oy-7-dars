import React from 'react'
import styled from '@emotion/styled'
import Union from '../assets/Union.svg'
import Union1 from '../assets/Union1.svg'
import Frame from '../assets/Frame.svg'
function RightSidebar() {
    const SidebarRight = styled.div`
    width: 20%;
    min-height: 100vh;
    background-color: black;
    color: #b3b3b3;
    `
  return (
    <SidebarRight>
          <div style={{  height: '400vh', background: '#000', color: '#B3B3B3', paddingTop: '50px', paddingLeft: '20px', paddingRight: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Friend Activity</h1>
                <div style={{display: 'flex' , gap: '20px'}}>
                    <img style={{cursor: 'pointer'}} src={Union} alt="" />
                    <img style={{cursor: 'pointer'}} src={Union1} alt="" />
                </div>
            </div>
            <div style={{marginTop: "25px"}}>
                <div>
                    <p style={{fontSize: '18px'}}>Let friends and followers on Spotify see what you’re listening to.</p>
                </div>
                <div style={{display: 'flex' , flexDirection: 'column' , gap: "25px", marginTop: '25px'}}>
                    <img width={162} src={Frame} alt="" />
                    <img width={162} src={Frame} alt="" />
                    <img width={162} src={Frame} alt="" />
                </div>
                <div >
                    <p style={{fontSize: '18px' , marginTop: '25px'}}>Go to Settings {'>'} Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
                </div>
            </div>
            <div style={{marginTop: '25px'}}>
                <button style={{width: '233px' , height: '62px', borderRadius: '40px', fontSize: '18px', fontWeight: "bold" , cursor: 'pointer', border:'none'}}>SETTINGS</button>
            </div>
        </div>
    </SidebarRight>
  )
}

export default RightSidebar
