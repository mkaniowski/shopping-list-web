/* eslint-disable react/destructuring-assignment */
import { Component, ErrorInfo } from 'react'

class ErrorBoundary extends Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('xd')
    console.error('Caught an error:', error, errorInfo)
    // logErrorToMyService(error, errorInfo)
  }

  render() {
    //@ts-expect-error Property 'hasError' does not exist on type 'Readonly<{}>'
    if (this.state.hasError) {
      // Overrided by tanstack router error element, but just in case
      return (
        <div className='error error-wrapper'>
          <h1>Something went wrong!</h1>
        </div>
      )
    }

    //@ts-expect-error Property 'children' does not exist on type 'Readonly<{}>'
    return this.props.children
  }
}

export default ErrorBoundary
