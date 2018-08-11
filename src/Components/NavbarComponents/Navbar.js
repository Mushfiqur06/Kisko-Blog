import React, {Component} from 'react';


class Navbar extends Component{
  constructor(){
    super();
  }

  render(){
    //menu Loop
    let linksMarkup = this.props.links.map((link, index) => {
      let linkMarkup = link.active ? (
          <a className="menuLink menuLinkActice" href={link.link}>{link.label}</a>
      ) : (
          <a className="menuLink" href={link.link}>{link.label}</a>
        );

        return (
            <li key={index} className="menuLinkItem">
                {linkMarkup}
            </li>
        );
    });

    return(
      <nav className="navbarTop">

        <div className="navbarTopLogo">
          <h1>
            <a>Kisko</a>
          </h1>
        </div>

        <div className="navbarRight float-right">
          <ul className="menuList">
              {linksMarkup}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;