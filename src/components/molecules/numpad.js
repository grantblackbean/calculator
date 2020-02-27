import React from 'react';
import Button from '../atoms/button';
import Display from '../atoms/display';



export class Numpad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ digit: 1 }, { digit: 2 }, { digit: 3 }, { digit: 4 }, { digit: 5 }, { digit: 6 }, { digit: 7 }, { digit: 8 }, { digit: 9 }, { digit: 0 }],
        };
    };
    render() {


        return (
            <div>
                <Display />
                <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">

                    {this.state.data.map(d => <Button title={d.digit} key={d.digit} onClick={() => { let doot = document.getElementById('display'); doot.value += d.digit; }} />)}
                    <div className="my-2 px-2 w-2/3 overflow-hidden sm:my-2 sm:px-2 sm:w-2/3 md:my-2 md:px-2 md:w-2/3 lg:my-2 lg:px-2 lg:w-2/3 xl:my-2 xl:px-2 xl:w-2/3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Calculate!</button>
                    </div>
                </div>
            </div>

        );
    }


}