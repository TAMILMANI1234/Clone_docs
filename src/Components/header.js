import '../Css/header.css'
import { Tooltip } from 'react-tooltip'
 
function Header(){
    var v=0;
    function add(){
       var v=document.getElementById('val').value;
       document.getElementById('val').value=++v;
    }
    function sub(){
        var v=document.getElementById('val').value;
        document.getElementById('val').value=--v;
    }
    return <div className="header">
         <div className='row'>
            <div className='col-8'>
                 <table >
                    <tr >
                        <td className='p-2' rowspan="2"><img src='https://cdn-icons-png.flaticon.com/512/5968/5968517.png'></img> </td>
                        <td><input className='file_name' type='text' placeholder='Untitled document'></input> <span><img className='star' src='https://cdn-icons-png.flaticon.com/128/929/929566.png'></img></span></td>
                    </tr>
                    <tr>
                            <ul className='menu'>
                                <li>File</li>
                                <li>Edit</li>
                                <li>View</li>
                                <li>Isert</li>
                                <li>Format</li>
                                <li>Tools</li>
                                <li>Extensions</li>
                                <li>Help</li>
                            </ul>
                    </tr>
                 </table>
            </div>
            <div className='col-4 left_content p-3'>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-9'>
                           <ul>
                                <li><img className='comment' src='https://cdn-icons-png.flaticon.com/128/1380/1380338.png'></img></li>
                                <li><img className='comment' src='https://cdn-icons-png.flaticon.com/128/10829/10829162.png'></img></li>
                                <li><button className='but'><img className='lock' src='https://cdn-icons-png.flaticon.com/128/2549/2549910.png'></img> Share</button></li>
                                <li ><img  className='comment' src='https://cdn-icons-png.flaticon.com/128/3033/3033143.png'></img></li>
                               
                            </ul>
                    </div>

                </div>
                           
            </div>
         </div>

          <div className='actions'>
               <table >
                   <tr>
                        <td><button className='undo' > <img src="https://cdn-icons-png.flaticon.com/128/2349/2349854.png"></img></button><Tooltip className='Tooltip' anchorSelect=".undo" place="bottom">Undo(Ctrl+z)</Tooltip></td>
                        <td><button className='redo'><img src="https://cdn-icons-png.flaticon.com/128/2349/2349829.png"></img></button><Tooltip className='Tooltip' anchorSelect=".redo" place="bottom">Redo(Ctrl+y)</Tooltip></td>
                        <td><button className='print'><img src="https://cdn-icons-png.flaticon.com/128/2874/2874775.png"></img></button><Tooltip className='Tooltip' anchorSelect=".print" place="bottom">Ptint(Ctrl+p)</Tooltip></td>
                        <td> <button className='spell'>A</button> <Tooltip className='Tooltip' anchorSelect=".spell" place="bottom">Spelling and grammar check(Ctrl+Alt+x)</Tooltip></td>
                        <td><button className='print_format'><img src="https://cdn-icons-png.flaticon.com/128/7715/7715788.png"></img></button><Tooltip className='Tooltip' anchorSelect=".print_format" place="bottom">Print Format</Tooltip></td>
                        <td>
                            <div class="dropdown">
                                <button class="btn  dropdown-toggle zoom" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    100%
                                </button><Tooltip className='Tooltip' anchorSelect=".zoom" place="bottom">Zoom</Tooltip>
                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item "  >Fit</a>
                                    <a class="dropdown-item"  >50%</a>
                                    <a class="dropdown-item"  >75%</a>
                                    <a class="dropdown-item"  >100%</a>
                                    <a class="dropdown-item"  >125%</a>
                                    <a class="dropdown-item"  >150%</a>
                                    <a class="dropdown-item"  >200%</a>
                                    
                                </div>
                                </div>
                        </td>
                        <td><span>|</span></td>
                        <td><div class="dropdown ">
                            <button class="btn  dropdown-toggle style " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Normal Text
                            </button><Tooltip className='Tooltip' anchorSelect=".style" place="bottom">Styles</Tooltip>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item"  >Action</a>
                                <a class="dropdown-item"  >Another action</a>
                                <a class="dropdown-item"  >Something else here</a>
                            </div>
                            </div></td>
                        <td><span>|</span></td>
  
                        <td><div class="dropdown ">
                            <button class="btn  dropdown-toggle open" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 Open...
                            </button><Tooltip className='Tooltip' anchorSelect=".open" place="bottom">Fonts</Tooltip>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item"  >more Font</a>
                                <a class="dropdown-item"  >Another action</a>
                                <a class="dropdown-item"  >Something else here</a>
                            </div>
                            </div></td>
                        <td><span>|</span></td>

                        <td>
                            <table className='number'>
                                <tr>
                                    <td><button onClick={sub}>-</button></td>
                                    <td><input type='text' id='val' value={v}></input></td>
                                    <td><button  onClick={add}>+</button></td>
                                </tr>
                            </table>
                             
                        </td>
                        <td><span>|</span></td>

                        <td> <div className='text_style'><button className='bold'><b>B</b></button><Tooltip className='Tooltip' anchorSelect=".bold" place="bottom">Bold</Tooltip></div> </td>
                        <td> <div className='text_style'><button className='italic'><em>I</em></button><Tooltip className='Tooltip' anchorSelect=".italic" place="bottom">Italic</Tooltip></div> </td>
                        <td> <div className='text_style'><button><u  className='underline'>U</u></button><Tooltip className='Tooltip' anchorSelect=".underline" place="bottom">Underline</Tooltip></div> </td>
                        <td> <div className='text_style'><button><u  className='color'>A</u></button><Tooltip className='Tooltip' anchorSelect=".color" place="bottom">Text Color</Tooltip></div> </td>
                        <td><button className='highlight'><img src="https://cdn-icons-png.flaticon.com/128/751/751461.png"></img></button><Tooltip className='Tooltip' anchorSelect=".highlight" place="bottom">Highlight Color</Tooltip></td>
                        <td><span>|</span></td>
                        <td><button><img src="https://cdn-icons-png.flaticon.com/128/2311/2311524.png"></img></button></td>
                         <td>
                             <div className='edit'><button><img src='https://cdn-icons-png.flaticon.com/128/650/650143.png'></img></button><Tooltip className='Tooltip' anchorSelect=".edit" place="bottom">Edit</Tooltip></div>
                         </td>
                         <td><span>|</span></td>
                         <td><button><img src="https://cdn-icons-png.flaticon.com/128/130/130906.png"></img></button></td>
                         
                   </tr>
               </table>
          </div>
         
    </div>
}

export default Header;