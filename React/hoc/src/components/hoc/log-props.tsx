import React from 'react';

const logProps = (Component) => {
  class LogProps extends React.Component {
    componentWillReceiveProps(nextProps: Readonly<{}>, nextContext: any): void {
      console.log('thisProps', this.props);
      console.log('nextProps', nextProps);
    }

    render(): React.ReactNode {
      return <Component {...this.props} />
    }

  }

  LogProps.displayName = `LogProps(${Component.displayName || Component.name || 'Component'})`
  return LogProps
}

export default logProps