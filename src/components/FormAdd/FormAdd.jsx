import './FormAdd.css';

import Button from '@components/Button/Button';
import Input from '@components/Input/Input';
import { Link } from 'react-router-dom';

function FormAdd() {
    const handleClick = () => {
        console.log('You clicked at form!');
    };
    return (
        <div className="all">
            <div className="form">
                <div className="nameForm">New task</div>
                <Input name="Name" text="Name" />
                <Input name="Desc" text="Description" />
                <Link to="/">
                    <Button
                        text="Add new task"
                        onClick={handleClick}
                        width="367px"
                        height="74px"
                    />
                </Link>
            </div>
        </div>
    );
}
export default FormAdd;
