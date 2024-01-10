let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https?: zer or one https
//\/\/ escaping 2 forword slashes
//(?:[-\w]+\.) ? question mark :D and : - and range of words one or more . )? zero or one
//([-\w]+) range of words one or more 
//\.\w+ . words one or more
//(?:\.\w+)?\/?.* question mark : . words one or more question mark x2 . zero or more