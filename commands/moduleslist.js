module.exports ={
    name: 'moduleslist',
    description: 'Prints list of degree/modules/departments for the respective year groups and semesters in an embed',

    async execute(message, args, command, ChannelIds, Discord, client){

        //YEAR 1 DEGREE PROGRAMMES
        if (message.channel.id === '855396707387179018'){
            const MathematicsEmoji = '🤓';
            const MathematicsAndStatisticsEmoji = '📊';
            const MathematicsAndPhysicsEmoji = '🚀';
            const MathematicsWithFinancialMathematicsEmoji = '💷';
            const MathematicsWithFinanceEmoji = '💵';
            const ActuarialScienceAndMathematicsEmoji = '💰';
            const ComputerScienceAndMathematicsEmoji = '💻';
            const MathematicsAndPhilosphyEmoji = '🤔';

            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Choose your degree programme')
                .setDescription('Messaging `$add (emoji name)` into the channel will make it easier for you to meet others'
                + ' on the same degree programme: by giving you access to your programme channel. It will also give'
                + ' you access to your module channels. To remove a degree programme role, please message:'
                + ' `$rem (emoji name)` into the channel. \n\n'
                + `${MathematicsEmoji} BSc/MMath Mathematics \n\n`
                + `${MathematicsAndStatisticsEmoji} BSc/MMath Mathematics & Statistics \n\n`
                + `${MathematicsAndPhysicsEmoji} BSc/MMath&Phys Mathematics & Physics \n\n`
                + `${MathematicsWithFinancialMathematicsEmoji} BSc/MMath Mathematics with Financial Mathematics \n\n`
                + `${MathematicsWithFinanceEmoji} BSc Mathematics with Finance \n\n`
                + `${ActuarialScienceAndMathematicsEmoji} BSc Actuarial Science & Mathematics \n\n`
                + `${ComputerScienceAndMathematicsEmoji} BSc Computer Science & Mathematics (Including with Industrial Experience) \n\n`
                + `${MathematicsAndPhilosphyEmoji} BSc Mathematics & Philosophy`);
            
            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }

        //YEAR 2 & YEAR 3 DEGREE PROGRAMMES
        if (message.channel.id === '880360739259445308' || message.channel.id === '854303604226523147'){
            const MathematicsEmoji = '🤓';
            const MathematicsAndStatisticsEmoji = '📊';
            const MathematicsAndPhysicsEmoji = '🚀';
            const MathematicsWithFinancialMathematicsEmoji = '💷';
            const MathematicsWithFinanceEmoji = '💵';
            const ActuarialScienceAndMathematicsEmoji = '💰';
            const ComputerScienceAndMathematicsEmoji = '💻';
            const MathematicsAndPhilosphyEmoji = '🤔';
            const MathematicsWithModernLanguageEmoji = '🗺️';
    
            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Choose your degree programme')
                .setDescription('Messaging `$add (emoji name)` into the channel will make it easier for you to meet others'
                + ' on the same degree programme and where approprtiate will give you access to joint honours channel.'
                + ' To remove a degree programme role, please message: `$rem (emoji name)` into the channel. \n\n'
                + `${MathematicsEmoji} BSc/MMath Mathematics \n\n`
                + `${MathematicsAndStatisticsEmoji} BSc/MMath Mathematics & Statistics \n\n`
                + `${MathematicsAndPhysicsEmoji} BSc/MMath&Phys Mathematics & Physics \n\n`
                + `${MathematicsWithFinancialMathematicsEmoji} BSc/MMath Mathematics with Financial Mathematics \n\n`
                + `${MathematicsWithFinanceEmoji} BSc Mathematics with Finance \n\n`
                + `${ActuarialScienceAndMathematicsEmoji} BSc Actuarial Science & Mathematics \n\n`
                + `${ComputerScienceAndMathematicsEmoji} BSc Computer Science & Mathematics (Including with Industrial Experience) \n\n`
                + `${MathematicsAndPhilosphyEmoji} BSc Mathematics & Philosophy \n\n`
                + `${MathematicsWithModernLanguageEmoji} BSc Mathematics with a Modern Language`);
         
            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }

        //YEAR 3 SEMESTER 1
        if (message.channel.id == '854299696415899648'){
            const MATH30000Emoji = '🇦';
            const MATH30011Emoji = '🇧';
            const MATH32001Emoji = '🇨';
            const MATH32051Emoji = '🇩';
            const MATH32091Emoji = '🇪';
            const MATH33011Emoji = '🇫';
            const MATH34011Emoji = '🇬';
            const MATH35001Emoji = '🇭';
            const MATH35021Emoji = '🇮';
            const MATH36001Emoji = '🇯';
            const MATH36031Emoji = '🇰';
            const MATH38001Emoji = '🇱';
            const MATH38141Emoji = '🇲';
            const MATH38161Emoji = '🇳';
            const MATH39511Emoji = '🇴';
    
            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Choose your semester 1 modules!')
                .setDescription('Messaging `$add (letter)` into the channel will give you' 
                + ' your module role & access to the module channel. To remove a module role & channel, please'
                + ' message `$rem (letter)` into the channel. \n\n'
                + `${MATH30000Emoji} MATH30000 - Double Project \n\n`
                + `${MATH30011Emoji} MATH30011 - Project (Semester 1) \n\n`
                + `${MATH32001Emoji} MATH32001 - Group Theory \n\n`
                + `${MATH32051Emoji} MATH32051 - Hyperbolic Geometry \n\n`
                + `${MATH32091Emoji} MATH32091 - Combinatorics & Graph Theory \n\n`
                + `${MATH33011Emoji} MATH33011 - Mathematical Logic \n\n`
                + `${MATH34011Emoji} MATH34011 - Complex Analysis & Applications \n\n`
                + `${MATH35001Emoji} MATH35001 - Viscous Fluid Flow \n\n`
                + `${MATH35021Emoji} MATH35021 - Elasticity \n\n`
                + `${MATH36001Emoji} MATH36001 - Matrix Analysis \n\n`
                + `${MATH36031Emoji} MATH36031 - Problem Solving by Computer \n\n`
                + `${MATH38001Emoji} MATH38001 - Statistical Inference \n\n`
                + `${MATH38141Emoji} MATH38141 - Regression Analysis \n\n`
                + `${MATH38161Emoji} MATH38161 - Multivariate Statistics & Machiene Learning \n\n`
                + `${MATH39511Emoji} MATH39511 - Actuarial Models`);
            
            let messageEmbed = await message.channel.send(embed);
            message.delete();
        }

        //YEAR 3 SEMESTER 2
        if (message.channel.id == '854299865878364160'){

            const MATH30002Emoji = '🇦';
            const MATH30022Emoji = '🇧';
            const MATH31042Emoji = '🇨';
            const MATH31052Emoji = '🇩';
            const MATH32012Emoji = '🇪';
            const MATH32032Emoji = '🇫';
            const MATH32062Emoji = '🇬';
            const MATH32072Emoji = '🇭';
            const MATH34032Emoji = '🇮';
            const MATH35012Emoji = '🇯';
            const MATH35032Emoji = '🇰';
            const MATH35062Emoji = '🇱';
            const MATH35082Emoji = '🇲';
            const MATH36022Emoji = '🇳';
            const MATH36062Emoji = '🇴';
            const MATH37002Emoji = '🇵';
            const MATH37012Emoji = '🇶';
            const MATH38032Emoji = '🇷';
            const MATH38072Emoji = '🇸';
            const MATH38172Emoji = '🇹';
            const MATH39032Emoji = '🇺';
            const MATH39512Emoji = '🇻';
            const MATH39522Emoji = '🇼';
            const MATH39542Emoji = '🇽';

        let embed = new Discord.MessageEmbed()
            .setColor('#9B59B6')
            .setTitle('Choose your semester 2 modules!')
            .setDescription('Messaging `$add (letter)` into the channel will give you' 
            + ' your module role & access to the module channel. To remove a module role & channel, please'
            + ' message `$rem (letter)` into the channel. \n\n'
            + `${MATH30002Emoji} MATH30002 - Mathematics Education \n\n`
            + `${MATH30022Emoji} MATH30022 - Project (Semester 2) \n\n`
            + `${MATH31042Emoji} MATH31042 - Fractal Geometry \n\n`
            + `${MATH31052Emoji} MATH31052 - Topology \n\n`
            + `${MATH32012Emoji} MATH32012 - Commutative Algebra \n\n`
            + `${MATH32032Emoji} MATH32032 - Coding Theory \n\n`
            + `${MATH32062Emoji} MATH32062 - Algebraic Geometry \n\n`
            + `${MATH32072Emoji} MATH32072 - Number Theory \n\n`
            + `${MATH34032Emoji} MATH34032 - Green's Functions, Integral Equations & Applications \n\n`
            + `${MATH35012Emoji} MATH35012 - Wave Motion \n\n`
            + `${MATH35032Emoji} MATH35032 - Mathematical Biology \n\n`
            + `${MATH35062Emoji} MATH35062 - Mathematics on a Finite Planet \n\n`
            + `${MATH35082Emoji} MATH35082 - Symmetry in Geometry & Nature \n\n`
            + `${MATH36022Emoji} MATH36022 - Numerical Analysis 2 \n\n`
            + `${MATH36062Emoji} MATH36062 - Convex Optimization \n\n`
            + `${MATH37002Emoji} MATH37002 - Martingales with Applications to Finance \n\n`
            + `${MATH37012Emoji} MATH37012 - Markov Processes \n\n`
            + `${MATH38032Emoji} MATH38032 - Time Series Analysis \n\n`
            + `${MATH38072Emoji} MATH38072 - Medical Statistics \n\n`
            + `${MATH38172Emoji} MATH38172 - Generalised Linear Models \n\n`
            + `${MATH39032Emoji} MATH39032 - Mathematical Modelling in Finance \n\n`
            + `${MATH39512Emoji} MATH39512 - Survival Analysis for Actuarial Science \n\n`
            + `${MATH39522Emoji} MATH39522 - Contingencies 2 \n\n`
            + `${MATH39542Emoji} MATH39542 - Risk Theory`);

            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }

        //YEAR 2 SEMESTER 1
        if (message.channel.id == '854084829301833778'){

            const MATH20101Emoji = '🇦';
            const MATH20111Emoji = '🇧';
            const MATH20201Emoji = '🇨';
            const MATH20401Emoji = '🇩';
            const MATH20411Emoji = '🇪';
            const MATH20621Emoji = '🇫';
            const MATH20701Emoji = '🇬';
            const MATH20811Emoji = '🇭';
            const MATH20951Emoji = '🇮';
    
            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Choose your semester 1 modules!')
                .setDescription('Messaging `$add (letter)` into the channel will give you' 
                + ' your module role & access to the module channel. To remove a module role & channel, please'
                + ' message `$rem (letter)` into the channel. \n\n'
                + `${MATH20101Emoji} MATH20101 - Real Analysis A \n\n`
                + `${MATH20111Emoji} MATH20111 - Real Analysis B \n\n`
                + `${MATH20201Emoji} MATH20201 - Algebraic Structures 1 \n\n`
                + `${MATH20401Emoji} MATH20401 - Partial Differential Equations & Vector Calculus A \n\n`
                + `${MATH20411Emoji} MATH20411 - Partial Differential Equations & Vector Calculus B \n\n`
                + `${MATH20621Emoji} MATH20621 - Programming with Python \n\n`
                + `${MATH20701Emoji} MATH20701 - Probability 2 \n\n`
                + `${MATH20811Emoji} MATH20811 - Practical Statistics \n\n`
                + `${MATH20951Emoji} MATH20951 - Financial Mathematics for Actuarial Science 2 \n\n`);
            
            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }

        //YEAR 2 SEMESTER 2
        if (message.channel.id == '854084934364430426'){
            const MATH20062Emoji = '🇦';
            const MATH20122Emoji = '🇧';
            const MATH20132Emoji = '🇨';
            const MATH29142Emoji = '🇩';
            const MATH20212Emoji = '🇪';
            const MATH20222Emoji = '🇫';
            const MATH20502Emoji = '🇬';
            const MATH20512Emoji = '🇭';
            const MATH20522Emoji = '🇮';
            const MATH20602Emoji = '🇯';
            const MATH20712Emoji = '🇰';
            const MATH20722Emoji = '🇱';
            const MATH20802Emoji = '🇲';
            const MATH20902Emoji = '🇳';
            const MATH20912Emoji = '🇴';
            const MATH20962Emoji = '🇵';
            const MATH20972Emoji = '🇶';
    
    
            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Choose your semester 2 modules!')
                .setDescription('Messaging `$add (letter)` into the channel will give you' 
                + ' your module role & access to the module channel. To remove a module role & channel, please'
                + ' message `$rem (letter)` into the channel. \n\n'
                + `${MATH20062Emoji} MATH20062 - Mathematical Communication & Group Projects \n\n`
                + `${MATH20122Emoji} MATH20122 - Metric Spaces \n\n`
                + `${MATH20132Emoji} MATH20132 - Calculus of Several Variables \n\n`
                + `${MATH29142Emoji} MATH29142 - 2P2: Complex Analysis \n\n`
                + `${MATH20212Emoji} MATH20212 - Algebraic Structures 2 \n\n`
                + `${MATH20222Emoji} MATH20222 - Introduction to Geometry \n\n`
                + `${MATH20502Emoji} MATH20502 - Fluid Mechanics \n\n`
                + `${MATH20512Emoji} MATH20512 - Classical Mechanics \n\n`
                + `${MATH20522Emoji} MATH20522 - Principles of Mathematical Modelling \n\n`
                + `${MATH20602Emoji} MATH20602 - Numerical Analysis 1 \n\n`
                + `${MATH20712Emoji} MATH20712 - Random Models \n\n`
                + `${MATH20722Emoji} MATH20722 - Foundations of Modern Probability \n\n`
                + `${MATH20802Emoji} MATH20802 - Statistical Methods \n\n`
                + `${MATH20902Emoji} MATH20902 - Discrete Mathematics \n\n`
                + `${MATH20912Emoji} MATH20912 - Introduction to Financial Mathematics \n\n`
                + `${MATH20962Emoji} MATH20962 - Contingencies 1 - Actuarial Science \n\n`
                + `${MATH20972Emoji} MATH20972 - Actuarial Insurance`);
            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }

        //YEAR 2 & YEAR 3 OUTSIDE MODULES
        if (message.channel.id === '880740835111628820' || message.channel.id === '880732668680081439'){
            const physEmoji = '🚀';
            const bmanEmoji = '💵';
            const compEmoji = '💻';
            const philEmoji = '🤔';
            const langEmoji = '🗺️';
            
            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Add outside discipline!')
                .setDescription('Messaging `$add (emoji name)` into the channel will give you access'
                + ' to the available joint honours channels. To remove, simply message `$rem (emoji name)`' 
                + ' into the channel.\n\n'
                + `${physEmoji} PHYS \n\n`
                + `${bmanEmoji} BMAN \n\n`
                + `${compEmoji} COMP \n\n`
                + `${philEmoji} PHIL \n\n`
                + `${langEmoji} LANG (Includes FREN, GERM, SPLA, ITAL etc.) \n\n`);
            
            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }

        //DEPARTMENTS
        if (message.channel.id === '875754076313378866'){
            const DoMathematics_Emoji = '🤓';
            const DoPaA_Emoji = '🚀';
            const DoC_Emoji = '🧪';
            const DoEES_Emoji = '🌏';
            const DoMaterials_Emoji = '💍';
            const DoCS_Emoji = '💻';
            const DoCEaAS_Emoji = '🏭';
            const DoMACE_Emoji = '✈️';
            const DoEEE_Emoji = '🏎️';
    
            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Faculty of Science & Engineering (FSE) - Add your department')
                .setDescription('Messaging `$add (emoji name)` into the channel will make it easier for you'
                + ' to meet others in the same department as well as meeting other people from' 
                + ' other deparments (which I strongly encourage!). To remove a department role, simple message: `$rem (emoji name)`' 
                + ' into the channel.\n\n'
                + '**School of Natural Sciences (SoNS)** \n\n'
                + `${DoMathematics_Emoji} Department of Mathematics (DoMathematics) \n\n`
                + `${DoPaA_Emoji} Department of Physics & Astronomy (DoP&A) \n\n`
                + `${DoC_Emoji} Department of Chemistry (DoC) \n\n`
                + `${DoEES_Emoji} Department of Earth & Environmental Sciences (DoEES) \n\n`
                + `${DoMaterials_Emoji} Department of Materials (DoMaterials) \n\n`
                + '**The School of Engineering (SoE)** \n\n'
                + `${DoCS_Emoji} Department of Computer Science (DoCS) \n\n`
                + `${DoCEaAS_Emoji} Department of Chemical Engineering & Analytical Science (DoCE&AS) \n\n`
                + `${DoMACE_Emoji} Department of Mechanical, Aerospace and Civil Engineering (DoMACE) \n\n`
                + `${DoEEE_Emoji} Department of Electical & Eelectronic Engineering (DoEEE)`);
            
            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }

        //FOUNDATION YEAR SEMESTER 1
        if (message.channel.id === '875638848321888296'){
            const MATH19801Emoji = '🇦';
            const MATH19821Emoji = '🇧';
            const MATH19861Emoji = '🇨';
    
            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Choose your semester 1 modules!')
                .setDescription('Messaging `$add (letter)` into the channel will give you' 
                + ' your module role & access to the module channel. To remove a module role & channel, please'
                + ' message `$rem (letter)` into the channel. \n\n'
                + `${MATH19801Emoji} MATH19801 - 0B1 \n\n`
                + `${MATH19821Emoji} MATH19821 - 0C1 \n\n`
                + `${MATH19861Emoji} MATH19861 - 0N1 \n\n`);
            
            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }

        //FOUNDATION YEAR SEMESTER 2
        if (message.channel.id === '875639302703415307'){
            const MATH19812Emoji = '🇦';
            const MATH19832Emoji = '🇧';
            const MATH19842Emoji = '🇨';
            const MATH19852Emoji = '🇩';
            const MATH19872Emoji = '🇪';
            
            let embed = new Discord.MessageEmbed()
                .setColor('#9B59B6')
                .setTitle('Choose your semester 2 modules!')
                .setDescription('Messaging `$add (letter)` into the channel will give you' 
                + ' your module role & access to the module channel. To remove a module role & channel, please'
                + ' message `$rem (letter)` into the channel. \n\n'
                + `${MATH19812Emoji} MATH19812 - 0B2 \n\n`
                + `${MATH19832Emoji} MATH19832 - 0C2 \n\n`
                + `${MATH19842Emoji} MATH19842 - 0F2 \n\n`
                + `${MATH19852Emoji} MATH19852 - 0J2 \n\n`
                + `${MATH19872Emoji} MATH19872 - 0D2 \n\n`);
            
            let messageEmbed = await message.channel.send(embed);
            message.delete()
        }
    }
}