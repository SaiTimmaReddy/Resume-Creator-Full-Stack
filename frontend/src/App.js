import React from 'react';

import './assets/style.css';
import { download } from '../src/containers/Resume';
import Resume from '../src/containers/Resume';
import ReactToPrint from 'react-to-print';

function App() {
    return (
        <>
            <Resume />
            {/* <a href="javascript:window.print()">
                <button id="print-button" width="1094" height="1275">
                    download
                </button>
            </a> */}
            <button onClick={download}>Download</button>
        </>
    );
}

export default App;
// import { useRef } from 'react';
// import './assets/style.css';
// import { jsPDF } from 'jspdf';
// import html2canvas from 'html2canvas';
// import Resume from '../src/containers/Resume';

// // import './styles.css';

// const App = () => {
//     const inputRef = useRef(null);
//     print = () => {
//         const string = <Resume />;
//         const pdf = new jsPDF('p', 'mm', 'a4');
//         pdf.fromHTML(string);
//         pdf.save('resume');
//     };
//     return (
//         <>
//             <div className="App">
//                 <div className="mb5">
//                     <button onClick={print}>Print</button>
//                 </div>
//                 <div id="divToPrint" ref={inputRef}>
//                     {/* <div>Note: Here the dimensions of div are same as A4</div> */}
//                     <div>
//                         <Resume />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// import React from 'react'
// import jsPDF from 'jspdf'
// function App() {
//     var doc =new jsPDF()
//   return (
//     doc.fromHTML("<dic>")
//   )
// }

// export default App
// import React, { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';
// import Resume from '../src/containers/Resume';
// import './assets/style.css';
// const App = () => {
//     const handlePrint = useReactToPrint({
//         content: () => Resume.componentRef
//     });
//     return (
//         <>
//             <Resume />
//             <button onClick={handlePrint} className="print__button">
//                 {' '}
//                 Print{' '}
//             </button>
//         </>
//     );
// };
// export default App;
