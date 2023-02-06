export const Flex = ({className='', children}) => <div className={'d-flex ' + className}>{children}</div>

export const ListWrapper = ({children}) =>
    <div className={'row'}>
        <div className={'col-md-2 col-lg-3'}></div>
        <div className=" col-md-8  col-lg-6 col-12">
            {children}
        </div>
        <div className={'col-md-2 col-lg-3'}></div>
    </div>