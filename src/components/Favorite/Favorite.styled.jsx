import styled from "@emotion/styled";


export const FavoriteList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 30px;
`

export const FavoriteItem = styled.li`
    flex-basis: calc((100% - 30px * (1 - 1)) / 1);
    min-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 768px) {
    flex-basis: calc((100% - 30px * (2 - 1)) / 2);
  }
  @media (min-width: 1280px) {
    flex-basis: calc((100% - 30px * (3 - 1)) / 3);
  }
`

export const FavoriteTitle = styled.h2`
    font-size: 24px;
    margin-top: 30px;
`

export const FavoriteItemImg = styled.img`
    width: 100%;
`

export const FavoriteItemBtn = styled.button`
    padding: 10px 10px;
    background-color: #1976d2;
    color: white;
    font-size: 16px;
    font-weight: 600;
    width: 200px;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
`