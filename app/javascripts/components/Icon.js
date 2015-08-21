import React from 'react/addons';

export default class Icon extends React.Component{
    render(){
        var {
            name, size, rotate, flip, spin, fixedWidth, stack, inverse,
            className, ...props
        } = this.props;
        var classNames = `icon fa fa-${name}`;
        if (size) {
            classNames += ` fa-${size}`;
        }
        if (rotate) {
            classNames += ` fa-rotate-${rotate}`;
        }
        if (flip) {
            classNames += ` fa-flip-${flip}`;
        }
        if (fixedWidth) {
            classNames += ' fa-fw';
        }
        if (spin) {
            classNames += ' fa-spin';
        }

        if (stack) {
            classNames += ` fa-stack-${stack}`;
        }
        if (inverse) {
            classNames += ' fa-inverse';
        }

        if (className) {
            classNames += ` ${className}`;
        }
        return <span {...props} className={classNames} />;
    }
}
