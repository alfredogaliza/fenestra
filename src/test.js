import Fenestra from ".";
import ReactDOM from 'react-dom';

import './styles/base.scss';
import './styles/theme.scss';

const data = {
    icons: [{
        title: "New Window",
        window: {
            props: {
                title: "New Window"
            },
            template: () => <h1>Hello, World!</h1>
        }
    }]
}

ReactDOM.render(<Fenestra data={data} />, document.getElementById("app"));