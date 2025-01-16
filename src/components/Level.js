export default function Level(props){
    let width = 0;
    let name = "";
    if(props==1){
        width=25;
        name="Novice";
    }
    else if(props==2){
        width=50;
        name="Intermediate"
    }else if(props==3){
        width=75;
        name="Advanced";
    }
    else if(props==4){
        width=100;
        name="Expert";
    }
    return(props.width & props.name);
}

/*0 - Fundamental Awareness (basic knowledge)
1 - Novice (limited experience)
2 - Intermediate (practical application)
3 - Advanced (applied theory)
4 - Expert (recognized authority)*/