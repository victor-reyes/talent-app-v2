export function calculateAverageLevel(communicationLevel: number, planningLevel: number, codingLevel: number) {


    const sumLevel = communicationLevel + planningLevel + codingLevel;

    const level = sumLevel / 50;

    return level;
}

