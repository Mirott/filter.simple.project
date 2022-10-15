import { Card, styled } from "@mui/material";


const StyledCard = styled(Card) ({
    width: 200,
    margin: 5,
})

const Value = styled('div') ({
    padding: 5,
})

export default function SingleProduct({ name, producent, group, room }) {

    return (
        <StyledCard>
            <Value style={{fontWeight: 'bolder', backgroundColor: '#eeeee4'}}>
                {name}
            </Value>

            <Value  style={{color: 'green'}}>
                {producent}
            </Value>

            <Value  style={{color: 'blue'}}>
                {group}
            </Value>

            <Value  style={{color: 'orange'}}>
                {room}
            </Value>
        </StyledCard>
    )
}