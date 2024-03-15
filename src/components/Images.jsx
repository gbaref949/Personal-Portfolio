import { createRoot } from 'react-dom/client'
import './styles.css'
import { Logo } from '@pmndrs/branding'
import { Carousal } from './Carousal'

/*
Model JSX auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 model.glb --transform --simplify --resolution=2048
Author: Omar Faruq Tawsif (https://sketchfab.com/omarfaruqtawsif32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
*/

function Images() {
  return (
    <>
      <Carousal />
      <div style={{ position: 'absolute', pointerEvents: 'none', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        <a href="https://pmnd.rs/" style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
          pmnd.rs
          <br />
          dev collective
        </a>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>18/01/2024</div>
        <Logo style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }} />
        <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }} href="#">
          scroll up/down ...
        </a>
      </div>{' '}
    </>
  )
}

createRoot(document.getElementById('images')).render(<Images />)
