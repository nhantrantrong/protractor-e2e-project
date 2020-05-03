export class Logger{

    public async step(stepNumber: number, stepDescription:string): Promise<void>{
        console.log(`[STEP]    ${stepNumber}. ${stepDescription}`);
    }

    public async verify(stepDescription:string): Promise<void>{
        console.log(`[VERIFY]  ${stepDescription}`);
    }

    public async info(message:string): Promise<void>{
        console.log(`[INFO]    ${message}`);
    }

    public async warn(message:string): Promise<void>{
        console.log(`[WARN]    ${message}`);
    }

    public async error(message:string): Promise<void>{
        console.log(`[ERROR]   ${message}`);
    }
}

export const logger = new Logger();