let uniqueId = Math.floor(Math.random() * 100000);

export default function fieldClassName(type) {
    uniqueId += 1;
    return `field-${type}-${uniqueId}`;
}
