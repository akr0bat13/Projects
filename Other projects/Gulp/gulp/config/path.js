import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
    build: {
        files: `${buildFolder}/files/`
    },  //Объект путей к результатам
    src: {
        files: `${srcFolder}/files/**/*.*`,
    },    //Объект путей к исходным результатам
    watch: {files: `${srcFolder}/files/**/*.*`,
    },    //Показываем за какими объектами мы смотрим,
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}
