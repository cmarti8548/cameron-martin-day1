import Image from 'next/image'

const Animal = props => {
    return (
        <div class="inline-block text-center content-center border-2 border-white p-6 bg-blue-100 block">
            <span class="inline-block">
                <Image width={170} height={170} src={"/"+props.img}></Image>
            </span>

            <div class="text-lg font-bold">
                <div>Animal: {props.type}</div>
                <div>State: {props.state}</div>
                <div>Fee: {props.adoption_fee}</div>
            </div>
        </div>
    )
}
export default Animal