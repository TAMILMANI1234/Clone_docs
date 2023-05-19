import '../Css/Sidebar.css';
import { Tooltip } from 'react-tooltip'

function Sidebar(){
    return (
        <div className='side'>
              <table>
                <tr>
                    <td><a className='cal' href='https://calendar.google.com/calendar/u/0/r?pli=1'> <button> <img src='https://img.icons8.com/?size=1x&id=DEJypxE54F9v&format=png'></img></button></a><Tooltip className='Tooltip' anchorSelect=".cal" place="bottom">Calendar</Tooltip></td>
                </tr>
                <tr>
                    <td><a className='notes' href='https://keep.google.com/'><button><img src='https://img.icons8.com/?size=1x&id=30655&format=png'></img></button></a> <Tooltip className='Tooltip' anchorSelect=".notes" place="bottom">Notes</Tooltip></td>
                </tr>
                <tr>
                    <td><button className='task'><img src='https://img.icons8.com/?size=1x&id=m4bBJPx7WmQW&format=png'></img></button><Tooltip className='Tooltip' anchorSelect=".task" place="bottom">Tasks</Tooltip></td>
                </tr>
                <tr>
                    <td><button className='contact'><img src='https://img.icons8.com/?size=1x&id=kDoeg22e5jUY&format=png'></img></button><Tooltip className='Tooltip' anchorSelect=".contact" place="bottom">Contact</Tooltip></td>
                </tr>
            
                <tr>
                    <td><a className='maps' href="https://www.google.com/maps"> <button><img src='https://img.icons8.com/?size=1x&id=DcygmpZqBEd9&format=png'></img></button></a><Tooltip className='Tooltip' anchorSelect=".maps" place="bottom">Maps</Tooltip></td>
                </tr>
                <tr>
                    <td><button className='add'>+</button><Tooltip className='Tooltip' anchorSelect=".add" place="bottom">Get add-ons</Tooltip></td>
                </tr>
                
                
              </table>
        </div>
    )
}

export default Sidebar;