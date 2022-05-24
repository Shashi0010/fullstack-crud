import { Component } from "react";

class Header extends Component {
    render() {
        return(
            <div className="text-center">
                <img 
                  src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-logo-design-template-b3bfdceb55d1cbc48f1ce50fd4e1ef24_screen.jpg?ts=1629941736"
                  width="300"
                  height="300"
                  className="img-thumbnail"
                  style={{ marginTop: "20px" }}
                />
                <hr />
                <h5>
                    <i>presents</i>
                </h5>

                <h1>App with React + Django</h1>
            </div>
        );
    }
}
export default Header;