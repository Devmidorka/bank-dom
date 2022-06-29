

export enum StyledTitlePosition{
    left = 'left',
    center = 'center',
    right = 'right'
}

export interface StyledTitleProps{
    position?: StyledTitlePosition,
    size?: string,
    paddingTop?: string,
    lineHeight?: string,
    weight?: string | number
    transform?: string
}

export interface TitleProps extends  StyledTitleProps{
    children: React.ReactNode
}