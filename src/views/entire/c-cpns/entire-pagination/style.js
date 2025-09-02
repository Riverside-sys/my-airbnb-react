import styled from "styled-components"

export const EntirePaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .ant-pagination-item-link {
      font-size: 16px;
    }

    .ant-pagination-item{
      margin: 0 10px;

      &:hover {
        text-decoration: underline;
        border-radius: 50%;
      }
    }

    .ant-pagination-item-active{
      background-color: #222;
      border-color: #222;
      color: #fff;
      border-radius: 50%;

      > a{
        color: #fff;
      }
    }


    .desc {
      margin-top: 16px;
      color: #222;
    }
  }
`