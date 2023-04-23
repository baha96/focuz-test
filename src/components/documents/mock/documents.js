import { documentTypes } from './documentTypes'
const documentCreate = ({
    name = '',
    description = '',
    dotsColor = [],
    isRequired = false,
    type = documentTypes.unknown,
    children = [],
}) => {
    return {
        id: Math.random().toString(16).slice(2),
        name,
        description,
        category: type,
        isRequired,
        dotsColor,
        children,
    }
}
export const documents = [
    documentCreate({
        name: 'Обязательные для всех',
        description: 'Документы, обязательные для всех сотрудников без исключения',
        type: documentTypes.group,
        dotsColor: ['#FF238D', '#FFB800', '#FF8D23'],
        children: [
            documentCreate({
                name: 'Паспорт',
                description: 'Для всех',
                type: documentTypes.document,
                isRequired: true,
                dotsColor: ['#FF238D'],
            }),
            documentCreate({
                name: 'ИНН',
                description: 'Для всех',
                type: documentTypes.document,
                isRequired: true,
            }),
        ],
    }),
    documentCreate({
        name: 'Обязательные для трудоустройства',
        description:
            'Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж',
        type: documentTypes.group,
        dotsColor: ['#FF238D', '#FFB800'],
        children: [
            documentCreate({
                name: 'Паспорт',
                description: 'Для всех',
                type: documentTypes.document,
                isRequired: true,
                dotsColor: ['#FF238D'],
            }),
            documentCreate({
                name: 'ИНН',
                description: 'Для всех',
                type: documentTypes.document,
                isRequired: true,
            }),
        ],
    }),
    documentCreate({
        name: 'Специальные',
        type: documentTypes.group,
        children: [
            documentCreate({
                name: 'Паспорт',
                description: 'Для всех',
                type: documentTypes.document,
                isRequired: true,
                dotsColor: ['#FF238D'],
            }),
            documentCreate({
                name: 'ИНН',
                description: 'Для всех',
                type: documentTypes.document,
                isRequired: true,
            }),
        ],
    }),
    documentCreate({
        name: 'Тестовое задание кандидата',
        description:
            'Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха',
        type: documentTypes.document,
    }),
    documentCreate({
        name: 'Трудовой договор',
        type: documentTypes.document,
        dotsColor: ['#0066FF', '#8E9CBB'],
    }),
    documentCreate({
        name: 'Мед. книжка',
        type: documentTypes.document,
    }),
]
