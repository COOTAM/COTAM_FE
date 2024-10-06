'use client';

const Cotam = () => {
  // const [isScrollVisible, setIsScrollVisible] = useState(false);

  // const onIntersect = (entry: unknown) => {
  //   console.log(entry);
  //   if (entry.isIntersecting) {
  //     setIsScrollVisible(true);
  //   } else {
  //     setIsScrollVisible(false);
  //   }
  // };

  // const scrollRef = useIntersect(onIntersect);

  // const endOfScrollRef = useIntersect(onIntersect);

  return (
    <div className="bg-red-300">
      {/* <div
        className={cn('h-[100dvh] w-full text-white', isScrollVisible ? 'fixed left-0 top-0' : '')}>
        이것들
      </div> */}
      {/* <div className="h-[1px]" ref={scrollRef} />
      <div className="h-[100dvh] w-full">섹션1</div>
      <div className="h-[100dvh] w-full">섹션2</div>
      <div className="h-[100dvh] w-full">섹션3</div>
      <div className="h-[100dvh] w-full">섹션4</div>
      <div className="h-[1px]" ref={endOfScrollRef} /> */}
    </div>
  );
};

export default Cotam;
