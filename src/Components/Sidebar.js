import '../Css/Sidebar.css';

function Sidebar(){
    return (
        <div className='side'>
              <table>
                <tr>
                    <td><button><img src='https://img.icons8.com/?size=1x&id=DEJypxE54F9v&format=png'></img></button></td>
                </tr>
                <tr>
                    <td><button><img src='https://img.icons8.com/?size=1x&id=30655&format=png'></img></button></td>
                </tr>
                <tr>
                    <td><button><img src='https://img.icons8.com/?size=1x&id=m4bBJPx7WmQW&format=png'></img></button></td>
                </tr>
                <tr>
                    <td><button><img src='https://img.icons8.com/?size=1x&id=kDoeg22e5jUY&format=png'></img></button></td>
                </tr>
            
                <tr>
                    <td><button><img src='https://img.icons8.com/?size=1x&id=DcygmpZqBEd9&format=png'></img></button></td>
                </tr>
                <tr>
                    <td><button className='add'>+</button></td>
                </tr>
                
                
              </table>
        </div>
    )
}

export default Sidebar;