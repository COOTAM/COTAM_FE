import Image from 'next/image';
import ImageBox from './ImageBox';
import LinkButton from './LinkButton';
import BorderTop from '@/components/common/BorderTop';
import { ZIndex } from '@/constants/ui';

interface DescriptionBoxProps {
  icon: string;
  title: string;
  count: number;
  description: string;
}

const AboutCotam = () => {
  const DescriptionList: DescriptionBoxProps[] = [
    {
      icon: '/assets/image/Pixel16-Book.png',
      title: 'SCORE',
      count: 48,
      // 추후 스터디횟수 종합하는 API로 횟수 대체하기
      description: '지금까지 48번의 스터디를 진행했어요!',
    },
    {
      icon: '/assets/image/Pixel16-Human.png',
      title: 'PLAYER',
      count: 31,
      // 추후 스터디횟수 종합하는 API로 횟수 대체하기
      description: '지금까지 31명의 코탐과 함께하고 있어요!',
    },
  ];
  return (
    <section
      className={`relative h-full bg-cotam-blue-100 pb-[60px] pt-20 ${ZIndex.home.secondLayer}`}>
      <BorderTop />
      <p className="mb-5 text-cotam-red-60 galmuri11-headline-1">코탐은?</p>
      <p className="mb-20 whitespace-pre-wrap text-cotam-blue-10 pretandard-body-1">
        {
          '2024년 활동 시작 이후로\n다양한 연차의 개발자,\n디자이너가 함께하고 있는\nIT 자기계발 스터디 모임입니다.'
        }
      </p>
      <ul className="mb-20 flex flex-col gap-5 sm:flex-row">
        {DescriptionList.map((description) => (
          <DescriptionBox key={description.description} {...description} />
        ))}
      </ul>
      <div className="flex flex-col gap-9">
        <p className="whitespace-pre-wrap text-white galmuri11-subtitle-1">
          {'스터디 뿐만 아니라\n다양한 활동도 함께해요'}
        </p>
        <div className="mb-9 flex flex-col gap-5 sm:flex-row">
          <ImageBox />
          <ImageBox />
        </div>
      </div>
      <LinkButton href="/about" label="코탐 더 알아보기 ⇨" />
    </section>
  );
};

export default AboutCotam;

const DescriptionBox = ({ icon, title, count, description }: DescriptionBoxProps) => {
  return (
    <li className="flex w-full flex-col gap-2 rounded-xl bg-cotam-blue-95 p-5">
      <div className="flex gap-2 galmuri11-headline-3">
        <Image src={icon} width={32} height={32} alt="descriptionIcon" />
        <p className="flex-grow text-cotam-blue-50">{title}</p>
        <p className="text-cotam-red-50">{count}</p>
      </div>
      <p className="text-cotam-blue-20 pretandard-body-3">{description}</p>
    </li>
  );
};
