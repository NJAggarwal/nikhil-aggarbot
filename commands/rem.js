module.exports ={
    name: 'rem',
    description: 'Command allows users to remove level 3 modules.',

    async execute(message, args, command, ChannelIds, Discord, client){

        let messageArgs = args.join(' ');

        let moduleChoices = messageArgs.split(' ');
        const member = message.guild.members.cache.get(message.author.id);

        //UoM MATHS 3RD YEAR (UNOFFICIAL) DISCORD SERVER
        if (message.guild.id === '769144748111167489'){

            //DECLARE YEAR 3 DEGREE, SEMESTER & OUTSIDE CHANNELS
            const Y3SelectDegreeChannel = '854303604226523147';
            const Y3OutsideModulesChannel = '880732668680081439';
            const Y3Semester1Channel = '854299696415899648';
            const Y3Semester2Channel = '854299865878364160';

            //FIND YEAR 3 DEGREE PROGRAMME ROLES
            const Y3MathematicsRole = message.guild.roles.cache.find(role=>role.name === "Maths");
            const Y3MathematicsAndStatisticsRole = message.guild.roles.cache.find(role=>role.name === "Maths & Statistics");
            const Y3MathematicsAndPhysicsRole = message.guild.roles.cache.find(role=>role.name === "Maths & Physics");
            const Y3MathematicsWithFinancialMathematicsRole = message.guild.roles.cache.find(role=>role.name === "MathsWithFinancialMaths");
            const Y3MathematicsWithFinanceRole = message.guild.roles.cache.find(role=>role.name === "Maths with Finance");
            const Y3ActuarialScienceAndMathematicsRole = message.guild.roles.cache.find(role=>role.name === "Actuarial Science & Maths");
            const Y3ComputerScienceAndMathematicsRole = message.guild.roles.cache.find(role=>role.name === "Computer Science & Maths");
            const Y3MathematicsAndPhilosphyRole = message.guild.roles.cache.find(role=>role.name === "Maths & Philosophy");
            const Y3MathematicsWithModernLanguageRole = message.guild.roles.cache.find(role=>role.name === "Maths with Language");

            //FIND YEAR 3 SEMESTER 1 MODULE ROLES
            const Y3SEMESTER1Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 1 ╠═════");
            const MATH30000Role = message.guild.roles.cache.find(role=>role.name === "MATH30000");
            const MATH30011Role = message.guild.roles.cache.find(role=>role.name === "MATH30011");
            const MATH32001Role = message.guild.roles.cache.find(role=>role.name === "MATH32001");
            const MATH32051Role = message.guild.roles.cache.find(role=>role.name === "MATH32051");
            const MATH32091Role = message.guild.roles.cache.find(role=>role.name === "MATH32091");
            const MATH33011Role = message.guild.roles.cache.find(role=>role.name === "MATH33011");
            const MATH34011Role = message.guild.roles.cache.find(role=>role.name === "MATH34011");
            const MATH35001Role = message.guild.roles.cache.find(role=>role.name === "MATH35001");
            const MATH35021Role = message.guild.roles.cache.find(role=>role.name === "MATH35021");
            const MATH36001Role = message.guild.roles.cache.find(role=>role.name === "MATH36001");
            const MATH36031Role = message.guild.roles.cache.find(role=>role.name === "MATH36031");
            const MATH38001Role = message.guild.roles.cache.find(role=>role.name === "MATH38001");
            const MATH38141Role = message.guild.roles.cache.find(role=>role.name === "MATH38141");
            const MATH38161Role = message.guild.roles.cache.find(role=>role.name === "MATH38161");
            const MATH39511Role = message.guild.roles.cache.find(role=>role.name === "MATH39511");
            
            //MAKE A LIST OF YEAR 3 SEMESTER 1 MODULE ROLES
            const Y3Semester1ModuleRoles=[MATH30000Role, MATH30011Role, MATH32001Role, MATH32051Role,
            MATH32091Role, MATH33011Role, MATH34011Role, MATH35001Role, MATH35021Role, MATH36001Role,
            MATH36031Role, MATH38001Role, MATH38141Role, MATH38161Role, MATH39511Role];

            //FIND YEAR 3 SEMESTER 2 MODULE ROLES
            const Y3SEMESTER2Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 2 ╠═════");
            const MATH30002Role = message.guild.roles.cache.find(role=>role.name === "MATH30002");
            const MATH30022Role = message.guild.roles.cache.find(role=>role.name === "MATH30022");
            const MATH31042Role = message.guild.roles.cache.find(role=>role.name === "MATH31042");
            const MATH31052Role = message.guild.roles.cache.find(role=>role.name === "MATH31052");
            const MATH32012Role = message.guild.roles.cache.find(role=>role.name === "MATH32012");
            const MATH32032Role = message.guild.roles.cache.find(role=>role.name === "MATH32032");
            const MATH32062Role = message.guild.roles.cache.find(role=>role.name === "MATH32062");
            const MATH32072Role = message.guild.roles.cache.find(role=>role.name === "MATH32072");
            const MATH34032Role = message.guild.roles.cache.find(role=>role.name === "MATH34032");
            const MATH35012Role = message.guild.roles.cache.find(role=>role.name === "MATH35012");
            const MATH35032Role = message.guild.roles.cache.find(role=>role.name === "MATH35032");
            const MATH35062Role = message.guild.roles.cache.find(role=>role.name === "MATH35062");
            const MATH35082Role = message.guild.roles.cache.find(role=>role.name === "MATH35082");
            const MATH36022Role = message.guild.roles.cache.find(role=>role.name === "MATH36022");
            const MATH36062Role = message.guild.roles.cache.find(role=>role.name === "MATH36062");
            const MATH37002Role = message.guild.roles.cache.find(role=>role.name === "MATH37002");
            const MATH37012Role = message.guild.roles.cache.find(role=>role.name === "MATH37012");
            const MATH38032Role = message.guild.roles.cache.find(role=>role.name === "MATH38032");
            const MATH38072Role = message.guild.roles.cache.find(role=>role.name === "MATH38072");
            const MATH38172Role = message.guild.roles.cache.find(role=>role.name === "MATH38172");
            const MATH39032Role = message.guild.roles.cache.find(role=>role.name === "MATH39032");
            const MATH39512Role = message.guild.roles.cache.find(role=>role.name === "MATH39512");
            const MATH39522Role = message.guild.roles.cache.find(role=>role.name === "MATH39522");
            const MATH39542Role = message.guild.roles.cache.find(role=>role.name === "MATH39542");

            //MAKE A LIST OF YEAR 3 SEMESTER 2 MODULE ROLES
            const Y3Semester2ModuleRoles=[MATH30002Role, MATH30022Role, MATH31042Role, MATH31052Role,
            MATH32012Role, MATH32032Role, MATH32062Role, MATH32072Role, MATH34032Role, MATH35012Role,
            MATH35032Role, MATH35062Role, MATH35082Role, MATH36022Role, MATH36062Role, MATH37002Role,
            MATH37012Role, MATH38032Role, MATH38072Role, MATH38172Role, MATH39032Role, MATH39512Role,
            MATH39522Role, MATH39542Role];

            //FIND YEAR 3 OUTSIDE MODULES ROLES
            const Y3PhysRole = message.guild.roles.cache.find(role=>role.name === "PHYS");
            const Y3BmanRole = message.guild.roles.cache.find(role=>role.name === "BMAN");
            const Y3CompRole = message.guild.roles.cache.find(role=>role.name === "COMP");
            const Y3PhilRole = message.guild.roles.cache.find(role=>role.name === "PHIL");
            const Y3LangRole = message.guild.roles.cache.find(role=>role.name === "LANG");

            //DECLARE YEAR 3 DEGREE PROGRAMME PASSWORDS
            const Y3MathematicsPassword = 'nerd';
            const Y3MathematicsAndStatisticsPassword = 'bar_chart';
            const Y3MathematicsAndPhysicsPassword = 'rocket';
            const Y3MathematicsWithFinancialMathematicsPassword = 'pound';
            const Y3MathematicsWithFinancePassword = 'dollar';
            const Y3ActuarialScienceAndMathematicsPassword = 'moneybag';
            const Y3ComputerScienceAndMathematicsPassword = 'computer';
            const Y3MathematicsAndPhilosphyPassword = 'thinking';
            const Y3MathematicsWithModernLanguagePassword = 'map';

            //DECLARE YEAR 3 SEMESTER 1 LETTERS
            const MATH30000Letter = 'A';
            const MATH30011Letter = 'B';
            const MATH32001Letter = 'C';
            const MATH32051Letter = 'D';
            const MATH32091Letter = 'E';
            const MATH33011Letter = 'F';
            const MATH34011Letter = 'G';
            const MATH35001Letter = 'H';
            const MATH35021Letter = 'I';
            const MATH36001Letter = 'J';
            const MATH36031Letter = 'K';
            const MATH38001Letter = 'L';
            const MATH38141Letter = 'M';
            const MATH38161Letter = 'N';
            const MATH39511Letter = 'O';

            //DECLARE YEAR 3 SEMESTER 2 LETTERS
            const MATH30002Letter = 'A';
            const MATH30022Letter = 'B';
            const MATH31042Letter = 'C';
            const MATH31052Letter = 'D';
            const MATH32012Letter = 'E';
            const MATH32032Letter = 'F';
            const MATH32062Letter = 'G';
            const MATH32072Letter = 'H';
            const MATH34032Letter = 'I';
            const MATH35012Letter = 'J';
            const MATH35032Letter = 'K';
            const MATH35062Letter = 'L';
            const MATH35082Letter = 'M';
            const MATH36022Letter = 'N';
            const MATH36062Letter = 'O';
            const MATH37002Letter = 'P';
            const MATH37012Letter = 'Q';
            const MATH38032Letter = 'R';
            const MATH38072Letter = 'S';
            const MATH38172Letter = 'T';
            const MATH39032Letter = 'U';
            const MATH39512Letter = 'V';
            const MATH39522Letter = 'W';
            const MATH39542Letter = 'X';

            //DECLARE YEAR 3 OUTSIDE MODULES PASSWORDS
            const Y3PhysPassword = 'rocket';
            const Y3BmanPassword = 'dollar';
            const Y3CompPassword = 'computer';
            const Y3PhilPassword = 'thinking';
            const Y3LangPassword = 'map';

            //YEAR 3 DEGREE PROGRAMME CHECKS
            if (message.channel.id === Y3SelectDegreeChannel){

                let i = 0
                do {
                    if (moduleChoices[i] === Y3MathematicsPassword){
                        await member.roles.remove(Y3MathematicsRole);
                    }
                    if (moduleChoices[i] === Y3MathematicsAndStatisticsPassword){
                        await member.roles.remove(Y3MathematicsAndStatisticsRole);
                    }
                    if (moduleChoices[i] === Y3MathematicsAndStatisticsPassword){
                        await member.roles.remove(Y3MathematicsAndStatisticsRole);
                    }
                    if (moduleChoices[i] === Y3MathematicsAndPhysicsPassword){
                        await member.roles.remove(Y3MathematicsAndPhysicsRole);
                    }
                    if (moduleChoices[i] === Y3MathematicsWithFinancialMathematicsPassword){
                        await member.roles.remove(Y3MathematicsWithFinancialMathematicsRole);
                    }
                    if (moduleChoices[i] === Y3MathematicsWithFinancePassword){
                        await member.roles.remove(Y3MathematicsWithFinanceRole);
                    }
                    if (moduleChoices[i] === Y3ActuarialScienceAndMathematicsPassword){
                        await member.roles.remove(Y3ActuarialScienceAndMathematicsRole);
                    }
                    if (moduleChoices[i] === Y3ComputerScienceAndMathematicsPassword){
                        await member.roles.remove(Y3ComputerScienceAndMathematicsRole);
                    }
                    if (moduleChoices[i] === Y3MathematicsAndPhilosphyPassword){
                        await member.roles.remove(Y3MathematicsAndPhilosphyRole);
                    }
                    if (moduleChoices[i] === Y3MathematicsWithModernLanguagePassword){
                        await member.roles.remove(Y3MathematicsWithModernLanguageRole);
                    }
                    i = i + 1
                } while(i < moduleChoices.length + 1)
            }

            //YEAR 3 SEMESTER 1 CHECKS
            if (message.channel.id === Y3Semester1Channel){

                let i = 0
                do {            
                    if(moduleChoices[i] === MATH30000Letter){
                        await member.roles.remove(MATH30000Role); 
                    }
                    if(moduleChoices[i] === MATH30011Letter){
                        await member.roles.remove(MATH30011Role);
                    }
                    if(moduleChoices[i] === MATH32001Letter){
                        await member.roles.remove(MATH32001Role);
                    }
                    if(moduleChoices[i] === MATH32051Letter){
                        await member.roles.remove(MATH32051Role);
                    }
                    if(moduleChoices[i] === MATH32091Letter){
                        await member.roles.remove(MATH32091Role);
                    }
                    if(moduleChoices[i] === MATH33011Letter){
                        await member.roles.remove(MATH33011Role);
                    }
                    if(moduleChoices[i] === MATH34011Letter){
                        await member.roles.remove(MATH34011Role);
                    }
                    if(moduleChoices[i] === MATH35001Letter){
                        await member.roles.remove(MATH35001Role);
                    }
                    if(moduleChoices[i] === MATH35021Letter){
                        await member.roles.remove(MATH35021Role);
                    }
                    if(moduleChoices[i] === MATH36001Letter){
                        await member.roles.remove(MATH36001Role);
                    }
                    if(moduleChoices[i] === MATH36031Letter){
                        await member.roles.remove(MATH36031Role);
                    }
                    if(moduleChoices[i] === MATH38001Letter){
                        await member.roles.remove(MATH38001Role);
                    }
                    if(moduleChoices[i] === MATH38141Letter){
                        await member.roles.remove(MATH38141Role);
                    }
                    if(moduleChoices[i] === MATH38161Letter){
                        await member.roles.remove(MATH38161Role);
                    }
                    if(moduleChoices[i] === MATH39511Letter){
                        await member.roles.remove(MATH39511Role);
                    }
                    i = i + 1
                } while (i < moduleChoices.length + 1)
            }

            //YEAR 3 SEMESTER 2 CHECKS
            if (message.channel.id === Y3Semester2Channel){

                let i = 0
                do{
                    if(moduleChoices[i] === MATH30002Letter){
                        await member.roles.remove(MATH30002Role)
                    }
                    if(moduleChoices[i] === MATH30022Letter){
                        await member.roles.remove(MATH30022Role)
                    }
                    if(moduleChoices[i] === MATH31042Letter){
                        await member.roles.remove(MATH31042Role)
                    }
                    if(moduleChoices[i] === MATH31052Letter){
                        await member.roles.remove(MATH31052Role)
                    }
                    if(moduleChoices[i] === MATH32012Letter){
                        await member.roles.remove(MATH32012Role)
                    }
                    if(moduleChoices[i] === MATH32032Letter){
                        await member.roles.remove(MATH32032Role)
                    }
                    if(moduleChoices[i] === MATH32062Letter){
                        await member.roles.remove(MATH32062Role)
                    }
                    if(moduleChoices[i] === MATH32072Letter){
                        await member.roles.remove(MATH32072Role)
                    }
                    if(moduleChoices[i] === MATH34032Letter){
                        await member.roles.remove(MATH34032Role)
                    }
                    if(moduleChoices[i] === MATH35012Letter){
                        await member.roles.remove(MATH35012Role)
                    }
                    if(moduleChoices[i] === MATH35032Letter){
                        await member.roles.remove(MATH35032Role)
                    }
                    if(moduleChoices[i] === MATH35062Letter){
                        await member.roles.remove(MATH35062Role)
                    }
                    if(moduleChoices[i] === MATH35082Letter){
                        await member.roles.remove(MATH35082Role)
                    }
                    if(moduleChoices[i] === MATH36022Letter){
                        await member.roles.remove(MATH36022Role)
                    }
                    if(moduleChoices[i] === MATH36062Letter){
                        await member.roles.remove(MATH36062Role)
                    }
                    if(moduleChoices[i] === MATH37002Letter){
                        await member.roles.remove(MATH37002Role)
                    }
                    if(moduleChoices[i] === MATH37012Letter){
                        await member.roles.remove(MATH37012Role)
                    }
                    if(moduleChoices[i] === MATH38032Letter){
                        await member.roles.remove(MATH38032Role)
                    }
                    if(moduleChoices[i] === MATH38072Letter){
                        await member.roles.remove(MATH38072Role)
                    }
                    if(moduleChoices[i] === MATH38172Letter){
                        await member.roles.remove(MATH38172Role)
                    }
                    if(moduleChoices[i] === MATH39032Letter){
                        await member.roles.remove(MATH39032Role)
                    }
                    if(moduleChoices[i] === MATH39512Letter){
                        await member.roles.remove(MATH39512Role)
                    }
                    if(moduleChoices[i] === MATH39522Letter){
                        await member.roles.remove(MATH39522Role)
                    }
                    if(moduleChoices[i] === MATH39542Letter){
                        await member.roles.remove(MATH39542Role)
                    }
                    i = i + 1
                } while (i < moduleChoices.length + 1)
            }

            //YEAR 3 OUTSIDE MODULES CHECKS
            if (message.channel.id === Y3OutsideModulesChannel){
                let i = 0
                do{
                    if(moduleChoices[i] === Y3PhysPassword){
                        await member.roles.remove(Y3PhysRole);
                    }
                    if(moduleChoices[i] === Y3BmanPassword){
                        await member.roles.remove(Y3BmanRole);
                    }
                    if(moduleChoices[i] === Y3CompPassword){
                        await member.roles.remove(Y3CompRole);
                    }
                    if(moduleChoices[i] === Y3PhilPassword){
                        await member.roles.remove(Y3PhilRole);
                    }
                    if(moduleChoices[i] === Y3LangPassword){
                        await member.roles.remove(Y3LangRole);
                    }
                    i = i + 1
                } while (i < moduleChoices.length + 1)
            }
        }

        //UoM MATHS 2ND YEAR (UNOFFICIAL) DISCORD SERVER
        if (message.guild.id === '786260531916832798'){

            //DECLARE YEAR 2 DEGREE, SEMESTER & OUTSIDE CHANNELS
            const Y2SelectDegreeChannel = '880360739259445308';
            const Y2Semester1Channel = '854084829301833778';
            const Y2Semester2Channel = '854084934364430426';
            const Y2OutsideModulesChannel = '880740835111628820';

            //FIND YEAR 2 DEGREE PROGRAMME ROLES
            const Y2MathematicsRole = message.guild.roles.cache.find(role=>role.name === "Maths");
            const Y2MathematicsAndStatisticsRole = message.guild.roles.cache.find(role=>role.name === "Maths & Statistics");
            const Y2MathematicsAndPhysicsRole = message.guild.roles.cache.find(role=>role.name === "Maths & Physics");
            const Y2MathematicsWithFinancialMathematicsRole = message.guild.roles.cache.find(role=>role.name === "MathsWithFinancialMaths");
            const Y2MathematicsWithFinanceRole = message.guild.roles.cache.find(role=>role.name === "Maths with Finance");
            const Y2ActuarialScienceAndMathematicsRole = message.guild.roles.cache.find(role=>role.name === "Actuarial Science & Maths");
            const Y2ComputerScienceAndMathematicsRole = message.guild.roles.cache.find(role=>role.name === "Computer Science & Maths");
            const Y2MathematicsAndPhilosphyRole = message.guild.roles.cache.find(role=>role.name === "Maths & Philosophy");
            const Y2MathematicsWithModernLanguageRole = message.guild.roles.cache.find(role=>role.name === "Maths with Language");

            //FIND YEAR 2 SEMESTER 1 MODULE ROLES
            const Y2SEMESTER1Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 1 ╠═════");
            const MATH20101Role = message.guild.roles.cache.find(role=>role.name === "MATH20101");
            const MATH20111Role = message.guild.roles.cache.find(role=>role.name === "MATH20111");
            const MATH20201Role = message.guild.roles.cache.find(role=>role.name === "MATH20201");
            const MATH20401Role = message.guild.roles.cache.find(role=>role.name === "MATH20401");
            const MATH20411Role = message.guild.roles.cache.find(role=>role.name === "MATH20411");
            const MATH20621Role = message.guild.roles.cache.find(role=>role.name === "MATH20621");
            const MATH20701Role = message.guild.roles.cache.find(role=>role.name === "MATH20701");
            const MATH20811Role = message.guild.roles.cache.find(role=>role.name === "MATH20811");
            const MATH20951Role = message.guild.roles.cache.find(role=>role.name === "MATH20951");

            //MAKE A LIST OF YEAR 2 SEMESTER 1 MODULE ROLES
            const Y2Semester1ModuleRoles=[MATH20101Role, MATH20111Role, MATH20201Role, MATH20401Role,
            MATH20411Role, MATH20621Role, MATH20701Role, MATH20811Role, MATH20951Role];

            //FIND YEAR 2 SEMESTER 2 MODULE ROLES
            const Y2SEMESTER2Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 2 ╠═════");
            const MATH20062Role = message.guild.roles.cache.find(role=>role.name === "MATH20062");
            const MATH20122Role = message.guild.roles.cache.find(role=>role.name === "MATH20122");
            const MATH20132Role = message.guild.roles.cache.find(role=>role.name === "MATH20132");
            const MATH29142Role = message.guild.roles.cache.find(role=>role.name === "MATH29142");
            const MATH20212Role = message.guild.roles.cache.find(role=>role.name === "MATH20212");
            const MATH20222Role = message.guild.roles.cache.find(role=>role.name === "MATH20222");
            const MATH20502Role = message.guild.roles.cache.find(role=>role.name === "MATH20502");
            const MATH20512Role = message.guild.roles.cache.find(role=>role.name === "MATH20512");
            const MATH20522Role = message.guild.roles.cache.find(role=>role.name === "MATH20522");
            const MATH20602Role = message.guild.roles.cache.find(role=>role.name === "MATH20602");
            const MATH20712Role = message.guild.roles.cache.find(role=>role.name === "MATH20712");
            const MATH20722Role = message.guild.roles.cache.find(role=>role.name === "MATH20722");
            const MATH20802Role = message.guild.roles.cache.find(role=>role.name === "MATH20802");
            const MATH20902Role = message.guild.roles.cache.find(role=>role.name === "MATH20902");
            const MATH20912Role = message.guild.roles.cache.find(role=>role.name === "MATH20912");
            const MATH20962Role = message.guild.roles.cache.find(role=>role.name === "MATH20962");
            const MATH20972Role = message.guild.roles.cache.find(role=>role.name === "MATH20972");

            //MAKE A LIST OF YEAR 2 SEMESTER 2 MODULE ROLES
            const Y2Semester2ModuleRoles=[MATH20062Role, MATH20122Role, MATH20132Role, MATH29142Role,
            MATH20122Role, MATH20222Role, MATH20502Role, MATH20512Role, MATH20522Role, MATH20602Role,
            MATH20712Role, MATH20722Role, MATH20802Role, MATH20902Role, MATH20912Role, MATH20962Role,
            MATH20972Role];
            
            //FIND YEAR 2 OUTSIDE MODULES ROLES
            const Y2PhysRole = message.guild.roles.cache.find(role=>role.name === "PHYS");
            const Y2BmanRole = message.guild.roles.cache.find(role=>role.name === "BMAN");
            const Y2CompRole = message.guild.roles.cache.find(role=>role.name === "COMP");
            const Y2PhilRole = message.guild.roles.cache.find(role=>role.name === "PHIL");
            const Y2LangRole = message.guild.roles.cache.find(role=>role.name === "LANG");

            //DECLARE YEAR 2 DEGREE PROGRAMME PASSWORDS
            const Y2MathematicsPassword = 'nerd';
            const Y2MathematicsAndStatisticsPassword = 'bar_chart';
            const Y2MathematicsAndPhysicsPassword = 'rocket';
            const Y2MathematicsWithFinancialMathematicsPassword = 'pound';
            const Y2MathematicsWithFinancePassword = 'dollar';
            const Y2ActuarialScienceAndMathematicsPassword = 'moneybag';
            const Y2ComputerScienceAndMathematicsPassword = 'computer';
            const Y2MathematicsAndPhilosphyPassword = 'thinking';
            const Y2MathematicsWithModernLanguagePassword = 'map';
    
            //DECLARE YEAR 2 SEMESTER 1 LETTERS
            const MATH20101Letter = 'A';
            const MATH20111Letter = 'B';
            const MATH20201Letter = 'C';
            const MATH20401Letter = 'D';
            const MATH20411Letter = 'E';
            const MATH20621Letter = 'F';
            const MATH20701Letter = 'G';
            const MATH20811Letter = 'H';
            const MATH20951Letter = 'I';

            //DECLARE YEAR 2 SEMESTER 2 LETTERS
            const MATH20062Letter = 'A';
            const MATH20122Letter = 'B';
            const MATH20132Letter = 'C';
            const MATH29142Letter = 'D';
            const MATH20212Letter = 'E';
            const MATH20222Letter = 'F';
            const MATH20502Letter = 'G';
            const MATH20512Letter = 'H';
            const MATH20522Letter = 'I';
            const MATH20602Letter = 'J';
            const MATH20712Letter = 'K';
            const MATH20722Letter = 'L';
            const MATH20802Letter = 'M';
            const MATH20902Letter = 'N';
            const MATH20912Letter = 'O';
            const MATH20962Letter = 'P';
            const MATH20972Letter = 'Q';

            //DECLARE YEAR 2 OUTSIDE MODULES PASSWORDS
            const Y2PhysPassword = 'rocket';
            const Y2BmanPassword = 'dollar';
            const Y2CompPassword = 'computer';
            const Y2PhilPassword = 'thinking';
            const Y2LangPassword = 'map';

            //YEAR 2 DEGREE PROGRAMME CHECKS
            if (message.channel.id === Y2SelectDegreeChannel){
                let i = 0
                do{
                    if (moduleChoices[i] === Y2MathematicsPassword){
                        await member.roles.remove(Y2MathematicsRole);
                    }
                    if (moduleChoices[i] === Y2MathematicsAndStatisticsPassword){
                        await member.roles.remove(Y2MathematicsAndStatisticsRole);
                    }
                    if (moduleChoices[i] === Y2MathematicsAndStatisticsPassword){
                        await member.roles.remove(Y2MathematicsAndStatisticsRole);
                    }
                    if (moduleChoices[i] === Y2MathematicsAndPhysicsPassword){
                        await member.roles.remove(Y2MathematicsAndPhysicsRole);
                    }
                    if (moduleChoices[i] === Y2MathematicsWithFinancialMathematicsPassword){
                        await member.roles.remove(Y2MathematicsWithFinancialMathematicsRole);
                    }
                    if (moduleChoices[i] === Y2MathematicsWithFinancePassword){
                        await member.roles.remove(Y2MathematicsWithFinanceRole);
                    }
                    if (moduleChoices[i] === Y2ActuarialScienceAndMathematicsPassword){
                        await member.roles.remove(Y2ActuarialScienceAndMathematicsRole);
                    }
                    if (moduleChoices[i] === Y2ComputerScienceAndMathematicsPassword){
                        await member.roles.remove(Y2ComputerScienceAndMathematicsRole);
                    }
                    if (moduleChoices[i] === Y2MathematicsAndPhilosphyPassword){
                        await member.roles.remove(Y2MathematicsAndPhilosphyRole);
                    }
                    if (moduleChoices[i] === Y2MathematicsWithModernLanguagePassword){
                        await member.roles.remove(Y2MathematicsWithModernLanguageRole);
                    }
                    i = i + 1
                } while (i < moduleChoices.length + 1)
            }

            //YEAR 2 SEMESTER 1 CHECKS
            if (message.channel.id === Y2Semester1Channel){

                let i = 0
                do{
                    if(moduleChoices[i] === MATH20101Letter){
                        await member.roles.remove(MATH20101Role);
                    }
                    if(moduleChoices[i] === MATH20111Letter){
                        await member.roles.remove(MATH20111Role);
                    }
                    if(moduleChoices[i] === MATH20201Letter){
                        await member.roles.remove(MATH20201Role);
                    }
                    if(moduleChoices[i] === MATH20401Letter){
                        await member.roles.remove(MATH20401Role);
                    }
                    if(moduleChoices[i] === MATH20411Letter){
                        await member.roles.remove(MATH20411Role);
                    }
                    if(moduleChoices[i] === MATH20621Letter){
                        await member.roles.remove(MATH20621Role);
                    }
                    if(moduleChoices[i] === MATH20701Letter){
                        await member.roles.remove(MATH20701Role);
                    }
                    if(moduleChoices[i] === MATH20811Letter){
                        await member.roles.remove(MATH20811Role);
                    }
                    if(moduleChoices[i] === MATH20951Letter){
                        await member.roles.remove(MATH20951Role);
                    }
                    i = i + 1
                } while (i < moduleChoices.length + 1)
            }

            //YEAR 2 SEMESTER 2 CHECKS
            if (message.channel.id === Y2Semester2Channel){

                let i = 0
                do{
                    if(moduleChoices[i] === MATH20062Letter){
                        await member.roles.remove(MATH20062Role);
                    }
                    if(moduleChoices[i] === MATH20122Letter){
                        await member.roles.remove(MATH20122Role);
                    }
                    if(moduleChoices[i] === MATH20132Letter){
                        await member.roles.remove(MATH20132Role);
                    }
                    if(moduleChoices[i] === MATH29142Letter){
                        await member.roles.remove(MATH29142Role);
                    }
                    if(moduleChoices[i] === MATH20212Letter){
                        await member.roles.remove(MATH20212Role);
                    }
                    if(moduleChoices[i] === MATH20222Letter){
                        await member.roles.remove(MATH20222Role);
                    }
                    if(moduleChoices[i] === MATH20502Letter){
                        await member.roles.remove(MATH20502Role);
                    }
                    if(moduleChoices[i] === MATH20512Letter){
                        await member.roles.remove(MATH20512Role);
                    }
                    if(moduleChoices[i] === MATH20522Letter){
                        await member.roles.remove(MATH20522Role);
                    }
                    if(moduleChoices[i] === MATH20602Letter){
                        await member.roles.remove(MATH20602Role);
                    }
                    if(moduleChoices[i] === MATH20712Letter){
                        await member.roles.remove(MATH20712Role);
                    }
                    if(moduleChoices[i] === MATH20722Letter){
                        await member.roles.remove(MATH20722Role);
                    }
                    if(moduleChoices[i] === MATH20802Letter){
                        await member.roles.remove(MATH20802Role);
                    }
                    if(moduleChoices[i] === MATH20902Letter){
                        await member.roles.remove(MATH20902Role);
                    }
                    if(moduleChoices[i] === MATH20912Letter){
                        await member.roles.remove(MATH20912Role);
                    }
                    if(moduleChoices[i] === MATH20962Letter){
                        await member.roles.remove(MATH20962Role);
                    }
                    if(moduleChoices[i] === MATH20972Letter){
                        await member.roles.remove(MATH20972Role);
                    }
                    i = i + 1
                } while (i < moduleChoices.length + 1)
            }

            //YEAR 2 OUTSIDE MODULES CHECKS
            if (message.channel.id === Y2OutsideModulesChannel){
                let i = 0
                do{
                    if(moduleChoices[i] === Y2PhysPassword){
                        await member.roles.remove(Y2PhysRole);
                    }
                    if(moduleChoices[i] === Y2BmanPassword){
                        await member.roles.remove(Y2BmanRole);
                    }
                    if(moduleChoices[i] === Y2CompPassword){
                        await member.roles.remove(Y2CompRole);
                    }
                    if(moduleChoices[i] === Y2PhilPassword){
                        await member.roles.remove(Y2PhilRole);
                    }
                    if(moduleChoices[i] === Y2LangPassword){
                        await member.roles.remove(Y2LangRole);
                    }
                    i = i + 1
                } while (i < moduleChoices.length + 1)
            }
        }

        //UoM MATHS 1ST YEAR (UNOFFICIAL) DISCORD SERVER
        if (message.guild.id === '855360915221774366'){

            //DECLARE 1ST YEARS SELECT DEGREE CHANNEL
            const Y1Channel = '855396707387179018';

            //FIND Y1 DEGREE PROGRAMME ROLES
            const MathematicsRole = message.guild.roles.cache.find(role=>role.name === "Maths");
            const MathematicsAndStatisticsRole = message.guild.roles.cache.find(role=>role.name === "Maths & Statistics");
            const MathematicsAndPhysicsRole = message.guild.roles.cache.find(role=>role.name === "Maths & Physics");
            const MathematicsWithFinancialMathematicsRole = message.guild.roles.cache.find(role=>role.name === "MathsWithFinancialMaths");
            const MathematicsWithFinanceRole = message.guild.roles.cache.find(role=>role.name === "Maths with Finance");
            const ActuarialScienceAndMathematicsRole = message.guild.roles.cache.find(role=>role.name === "Actuarial Science & Maths");
            const ComputerScienceAndMathematicsRole = message.guild.roles.cache.find(role=>role.name === "Computer Science & Maths");
            const MathematicsAndPhilosphyRole = message.guild.roles.cache.find(role=>role.name === "Maths & Philosophy");

            //FIND YEAR 1 SEMESTER 1 MODULE ROLES
            const Y1SEMESTER1Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 1 ╠═════");
            const MATH10001Role = message.guild.roles.cache.find(role=>role.name === "MATH10001");
            const MATH10101Role = message.guild.roles.cache.find(role=>role.name === "MATH10101");
            const MATH10111Role = message.guild.roles.cache.find(role=>role.name === "MATH10111");
            const MATH10121Role = message.guild.roles.cache.find(role=>role.name === "MATH10121");
            const MATH10131Role = message.guild.roles.cache.find(role=>role.name === "MATH10131");
            const MATH10141Role = message.guild.roles.cache.find(role=>role.name === "MATH10141");
            const MATH10951Role = message.guild.roles.cache.find(role=>role.name === "MATH10951");

            //FIND YEAR 1 SEMESTER 2 MODULE ROLES
            const Y1SEMESTER2Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 2 ╠═════");
            const MATH10202Role = message.guild.roles.cache.find(role=>role.name === "MATH10202");
            const MATH10212Role = message.guild.roles.cache.find(role=>role.name === "MATH10212");
            const MATH10222Role = message.guild.roles.cache.find(role=>role.name === "MATH10222");
            const MATH11222Role = message.guild.roles.cache.find(role=>role.name === "MATH11222");
            const MATH10232Role = message.guild.roles.cache.find(role=>role.name === "MATH10232");
            const MATH10242Role = message.guild.roles.cache.find(role=>role.name === "MATH10242");
            const MATH10282Role = message.guild.roles.cache.find(role=>role.name === "MATH10282");

            //DECLARE DEGREE PROGRAMME PASSWORDS
            const MathematicsPassword = 'nerd';
            const MathematicsAndStatisticsPassword = 'bar_chart';
            const MathematicsAndPhysicsPassword = 'rocket';
            const MathematicsWithFinancialMathematicsPassword = 'pound';
            const MathematicsWithFinancePassword = 'dollar';
            const ActuarialScienceAndMathematicsPassword = 'moneybag';
            const ComputerScienceAndMathematicsPassword = 'computer';
            const MathematicsAndPhilosphyPassword = 'thinking';

            //YEAR 1 CHECKS
            if(message.channel.id === Y1Channel){
                let i = 0
                do{
                    if (moduleChoices[i] === MathematicsPassword){
                        await member.roles.remove(MathematicsRole);
                        await member.roles.remove(Y1SEMESTER1Role);
                        await member.roles.remove(MATH10001Role);
                        await member.roles.remove(MATH10101Role);
                        await member.roles.remove(MATH10121Role);
                        await member.roles.remove(MATH10141Role);
                        await member.roles.remove(Y1SEMESTER2Role);
                        await member.roles.remove(MATH10202Role);
                        await member.roles.remove(MATH10222Role);
                        await member.roles.remove(MATH10242Role);
                        await member.roles.remove(MATH10282Role);
                    }
                    if (moduleChoices[i] === MathematicsAndStatisticsPassword){
                        await member.roles.remove(MathematicsAndStatisticsRole);
                        await member.roles.remove(Y1SEMESTER1Role);
                        await member.roles.remove(MATH10001Role);
                        await member.roles.remove(MATH10101Role);
                        await member.roles.remove(MATH10121Role);
                        await member.roles.remove(MATH10141Role);
                        await member.roles.remove(Y1SEMESTER2Role);
                        await member.roles.remove(MATH10202Role);
                        await member.roles.remove(MATH10222Role);
                        await member.roles.remove(MATH10242Role);
                        await member.roles.remove(MATH10282Role);
                    }
                    if (moduleChoices[i] === MathematicsAndPhysicsPassword){
                        await member.roles.remove(MathematicsAndPhysicsRole);
                        await member.roles.remove(Y1SEMESTER1Role);
                        await member.roles.remove(MATH10111Role);
                        await member.roles.remove(MATH10121Role);
                        await member.roles.remove(Y1SEMESTER2Role);
                        await member.roles.remove(MATH10212Role);
                        await member.roles.remove(MATH11222Role);
                    }
                    if (moduleChoices[i] === MathematicsWithFinancialMathematicsPassword){
                        await member.roles.remove(MathematicsWithFinancialMathematicsRole);
                        await member.roles.remove(Y1SEMESTER1Role);
                        await member.roles.remove(MATH10001Role);
                        await member.roles.remove(MATH10101Role);
                        await member.roles.remove(MATH10121Role);
                        await member.roles.remove(MATH10141Role);
                        await member.roles.remove(Y1SEMESTER2Role);
                        await member.roles.remove(MATH10202Role);
                        await member.roles.remove(MATH10222Role);
                        await member.roles.remove(MATH10242Role);
                        await member.roles.remove(MATH10282Role);
                    }
                    if (moduleChoices[i] === MathematicsWithFinancePassword){
                        await member.roles.remove(MathematicsWithFinanceRole);
                        await member.roles.remove(Y1SEMESTER1Role);
                        await member.roles.remove(MATH10001Role);
                        await member.roles.remove(MATH10111Role);
                        await member.roles.remove(MATH10131Role);
                        await member.roles.remove(MATH10141Role);
                        await member.roles.remove(Y1SEMESTER2Role);
                        await member.roles.remove(MATH10212Role);
                        await member.roles.remove(MATH10232Role);
                        await member.roles.remove(MATH10242Role);
                        await member.roles.remove(MATH10282Role);
                    }
                    if (moduleChoices[i] === ActuarialScienceAndMathematicsPassword){
                        await member.roles.remove(ActuarialScienceAndMathematicsRole);
                        await member.roles.remove(Y1SEMESTER1Role);
                        await member.roles.remove(MATH10111Role);
                        await member.roles.remove(MATH10131Role);
                        await member.roles.remove(MATH10141Role);
                        await member.roles.remove(MATH10951Role);
                        await member.roles.remove(Y1SEMESTER2Role);
                        await member.roles.remove(MATH10212Role);
                        await member.roles.remove(MATH10232Role);
                        await member.roles.remove(MATH10242Role);
                        await member.roles.remove(MATH10282Role);
                        
                    }
                    if (moduleChoices[i] === ComputerScienceAndMathematicsPassword){
                        await member.roles.remove(ComputerScienceAndMathematicsRole);
                        await member.roles.remove(Y1SEMESTER1Role);
                        await member.roles.remove(MATH10111Role);
                        await member.roles.remove(MATH10131Role);
                        await member.roles.remove(Y1SEMESTER2Role);
                        await member.roles.remove(MATH10212Role);
                        await member.roles.remove(MATH10232Role);
                    }
                    if (moduleChoices[i] === MathematicsAndPhilosphyPassword){
                        await member.roles.remove(MathematicsAndPhilosphyRole);
                        await member.roles.remove(Y1SEMESTER1Role);
                        await member.roles.remove(MATH10111Role);
                        await member.roles.remove(MATH10131Role);
                        await member.roles.remove(Y1SEMESTER2Role);
                        await member.roles.remove(MATH10212Role);
                        await member.roles.remove(MATH10232Role);
                    }
                    i = i + 1
                }while (i < moduleChoices.length + 1)
            }
        }
        //UoM MATHS FOUNDATION YEAR (UNOFFICAL) DISCORD SERVER
        if (message.guild.id === '875621155510321183'){

            //DECLARE FOUNDATION YEAR DEPARTMENT & SEMESTER CHANNELS
            const removeDepartmentChannel = '875754076313378866';
            const FySemester1Channel = '875638848321888296';
            const FySemester2Channel = '875639302703415307';

            //FIND DEPARTMENT ROLES
            const DoMathematics_Role = message.guild.roles.cache.find(role=>role.name === "DoMathematics");
            const DoPaA_Role = message.guild.roles.cache.find(role=>role.name === "DoP&A");
            const DoC_Role = message.guild.roles.cache.find(role=>role.name === "DoC");
            const DoEES_Role = message.guild.roles.cache.find(role=>role.name === "DoEES");
            const DoMaterials_Role = message.guild.roles.cache.find(role=>role.name === "DoMaterials");
            const DoCS_Role = message.guild.roles.cache.find(role=>role.name === "DoCS");
            const DoCEaAS_Role = message.guild.roles.cache.find(role=>role.name === "DoCE&AS");
            const DoMACE_Role = message.guild.roles.cache.find(role=>role.name === "DoMACE");
            const DoEEE_Role = message.guild.roles.cache.find(role=>role.name === "DoEEE");

            //FIND FOUNDATION YEAR SEMESTER 1 MODULE ROLES
            const FySEMESTER1Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 1 ╠═════");
            const MATH19801Role = message.guild.roles.cache.find(role=>role.name === "MATH19801");
            const MATH19821Role = message.guild.roles.cache.find(role=>role.name === "MATH19821");
            const MATH19861Role = message.guild.roles.cache.find(role=>role.name === "MATH19861");

            //MAKE A LIST OF FOUNDATION YEAR SEMESTER 1 MODULE ROLES
            const FySemester1ModuleRoles = [MATH19801Role, MATH19821Role, MATH19861Role];
            
            //FIND FOUNDATION YEAR SEMESTER 2 MODULE ROLES
            const FySEMESTER2Role = message.guild.roles.cache.find(role=>role.name === "═════╣ SEMESTER 2 ╠═════");
            const MATH19812Role = message.guild.roles.cache.find(role=>role.name === "MATH19812");
            const MATH19832Role = message.guild.roles.cache.find(role=>role.name === "MATH19832");
            const MATH19842Role = message.guild.roles.cache.find(role=>role.name === "MATH19842");
            const MATH19852Role = message.guild.roles.cache.find(role=>role.name === "MATH19852");
            const MATH19872Role = message.guild.roles.cache.find(role=>role.name === "MATH19872");

            //MAKE A LIST OF FOUNDATION YEAR SEMESTER 2 MODULE ROLES
            const FySemester2ModuleRoles = [MATH19812Role, MATH19832Role, MATH19842Role, MATH19852Role,
            MATH19872Role];

            //DECLARE DEPARTMENT PASSWORDS
            const DoMathematics_Password = 'nerd';
            const DoPaA_Password = 'rocket';
            const DoC_Password = 'test_tube';
            const DoEES_Password = 'earth_asia';
            const DoMaterials_Password = 'ring';
            const DoCS_Password = 'computer';
            const DoCEaAS_Password = 'factory';
            const DoMACE_Password = 'airplane';
            const DoEEE_Password = 'race_car';

            //DECLARE FOUNDATION YEAR SEMESTER 1 LETTERS
            const MATH19801Letter = 'A';
            const MATH19821Letter = 'B';
            const MATH19861Letter = 'C';
  
            //DECLARE FOUNDATION YEAR SEMESTER 2 LETTERS
            const MATH19812Letter = 'A';
            const MATH19832Letter = 'B';
            const MATH19842Letter = 'C';
            const MATH19852Letter = 'D';
            const MATH19872Letter = 'E';
          
            //DEPARTMENT CHECKS
            if (message.channel.id === removeDepartmentChannel){
                let i = 0
                do{
                    if (moduleChoices[i] === DoMathematics_Password){
                        await member.roles.remove(DoMathematics_Role);
                    }
                    if (moduleChoices[i] === DoPaA_Password){
                        await member.roles.remove(DoPaA_Role);
                    }
                    if (moduleChoices[i] === DoC_Password){
                        await member.roles.remove(DoC_Role);
                    }
                    if (moduleChoices[i] === DoEES_Password){
                        await member.roles.remove(DoEES_Role);
                    }
                    if (moduleChoices[i] === DoMaterials_Password){
                        await member.roles.remove(DoMaterials_Role);
                    }
                    if (moduleChoices[i] === DoCS_Password){
                        await member.roles.remove(DoCS_Role);
                    }
                    if (moduleChoices[i] === DoCEaAS_Password){
                        await member.roles.remove(DoCEaAS_Role);
                    }
                    if (moduleChoices[i] === DoMACE_Password){
                        await member.roles.remove(DoMACE_Role);
                    }
                    if (moduleChoices[i] === DoEEE_Password){
                        await member.roles.remove(DoEEE_Role);
                    }
                    i = i + 1
                } while (i < moduleChoices.length + 1)
            }

            //FOUNDATION YEAR SEMESTER 1 CHECKS
            if (message.channel.id === FySemester1Channel){
                let i = 0
                do{
                    if(moduleChoices[i] === MATH19801Letter){
                        await member.roles.remove(MATH19801Role);
                    }
                    if(moduleChoices[i] === MATH19821Letter){
                        await member.roles.remove(MATH19821Role);
                    }
                    if(moduleChoices[i] === MATH19861Letter){
                        await member.roles.remove(MATH19861Role);
                    }
                    i = i + 1
                } while (i < moduleChoices.length + 1)
            }

            //FOUNDATION YEAR SEMESTER 2 CHECKS
            if (message.channel.id === FySemester2Channel){
                let i = 0
                do{
                    if(moduleChoices[i] === MATH19812Letter){
                        await member.roles.remove(MATH19812Role);
                    }
                    if(moduleChoices[i] === MATH19832Letter){
                        await member.roles.remove(MATH19832Role);
                    }
                    if(moduleChoices[i] === MATH19842Letter){
                        await member.roles.remove(MATH19842Role);
                    }
                    if(moduleChoices[i] === MATH19852Letter){
                        await member.roles.remove(MATH19852Role);
                    }
                    if(moduleChoices[i] === MATH19872Letter){
                        await member.roles.remove(MATH19872Role);
                    }
                    i = i + 1
                } while (i < moduleChoices.length + 1)
            }
        }
        await message.react('👌');
        setTimeout(() => message.delete(), 500);
    }
}