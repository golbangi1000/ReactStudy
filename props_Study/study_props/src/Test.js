const Test = ({name, children, className,asdf}) => {
    /* 언팩킹 unpacking*/
    /* 책 page96*/
        return <div>
        
        <div>안녕하세요 제 이름은 {name}  입니다 </div>
        <div>{children}</div>
        <div>{className}</div>
        <div>{asdf}</div>
        </div>
}

export default Test;