const MasonryActiveClassName = 'masonryActive';

class Masonry {
    constructor(element, options = {}) {
        this.containerNode = element;
        this.childrenNodes = element.children;
        this.childrenData = Array.from(this.childrenNodes).
        map((childNode) => ({
            childNode,
            origHeight: Number(childNode.dataset.height),
            origWidth: Number(childNode.dataset.width)
        }));

        this.settings = {
            gap: options.gap || 0,
            columns: options.columns || 3
        };

        this.setParameters();
    }

    setParameters() {
        const containerWidth = this.constainerNode.offsetWidth;

        const widthImage = (containerWidth - this.settings.gap * (this.settings.columns - 1)) / this.settings.columns;

        this.childrenData = this.childrenData.map((child) => ({
            ...child,
            currentWidth: widthImage,
            currentHeigth: Math.floor(widthImage * child.origHeight / child.origWidth)
        }));

        const heightColumns = new Array(this.settings.columns).fill(0);
        const sizeColumns = new Array(this.settings.columns).fill(0);
        this.childrenData.forEach((child, i) => {
            heightColumns[i % this.settings.columns] += child.currentHeigth + this.settings.gap;

            sizeColumns[i % this.settings.columns] += 1;
        });

        const minHeightColumn = heightColumns.reduce((acc, size) => (size < acc) ? size : acc);
        const diffImages = heightColumns.map((heightColumn, i) => (heightColumn - minHeightColumn) / sizeColumns[i]);

        this.containerNode.style.width = `${containerWidth}px`;
        this.containerNode.style.height = `${minHeightColumn - this.settings.gap}px`;
        
        const topSets = new Array(this.settings.columns).fill(0);

        this.childrenData = this.childrenData.map((child, i) => {
            const indexColumn = i % this.settings.columns;
            const left = indexColumn * widthImage + this.settings.gap * indexColumn;
            const currentHeigth = child.currentHeigth - diffImages[indexColumn];
            const top = topSets[indexColumn];
            topSets[indexColumn] += currentHeigth + this.settings.gap;

            return {
                ...child,
                currentHeigth,
                left,
                top
            };
        });

        this.childrenData.forEach((child) => {
            child.childNode.style.top = `${child.top}px`;
            child.childNode.style.left = `${child.left}px`;
            child.childNode.style.width = `${child.width}px`;
            child.childNode.style.height = `${child.height}px`;
        });

        this.containerNode.classList.add(MasonryActiveClassName);
    }
}