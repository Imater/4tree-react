import React from 'react/addons';

require('./Editor.less');

class Editor extends React.Component{
    render(){
        var style = {
            contenteditable: true
        };
        return (
            <div className='editor' style={style}>
                Some thoughts for compatibility between gradients (including transparency) and IE6-8:

Using an adapted mixin in conjunction with using Paul Irish’s infamous class based IE selectors (so that .ie6, .ie7, .ie8 classes are applied to either the HTML or body elements) you could hack in support without too much effort.

I suppose you could also use conditional stylesheets, though that’d be a lot longer way round the circle and something I haven’t done in a long while.

The RGBa to HEX function built into LESSPHP ensures that when you pass a RGBa value to the variable argument it is correctly converted for the proprietary MS CSS filter (using alpha hex, #AARRGGBB).
            </div>
        )
    }
}

export default Editor;
