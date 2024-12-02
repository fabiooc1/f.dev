import { useState } from "react";
import { DataJourneyItems } from "../../../data/constants/DataJourneyItems";
import { SectionContainer } from "../SectionContainer";
import { SectionTitle } from "../SectionTitle";
import { JourneyItemModel } from "../../../data/models/JourneyItemModel";
import { JourneyItem } from "./JourneyItem";

export function Journey() {
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

    const numberOfItemsPerPage = 2;
    const totalPages = Math.ceil(DataJourneyItems.length / numberOfItemsPerPage);

    function handleTogglePage(event: any) {
        const currentButtonIndex = Number(event.target.value);
        setCurrentPageIndex(currentButtonIndex)
    }

    function getPaginationContent(): JourneyItemModel[] {
        const startItem = currentPageIndex * numberOfItemsPerPage;
        const endItem = startItem + numberOfItemsPerPage;

        return DataJourneyItems.slice(startItem, endItem);
    }

    return (
        <SectionContainer id="journey">
            <SectionTitle title="Minha jornada" />

            <div className="flex flex-col gap-8">
                {getPaginationContent().map(item => (
                    <JourneyItem key={item.id} {...item} />
                ))}
            </div>

            <div className="flex gap-3 justify-center">
                {totalPages > 1 && Array.from({ length: totalPages })
                    .map((_, index) => {
                        const currentButtonIndex = index

                        return <button
                            key={currentButtonIndex}
                            onClick={event => handleTogglePage(event)}
                            value={currentButtonIndex}
                            disabled={currentPageIndex == currentButtonIndex}
                            className={`h-8 w-8 font-bold rounded-full disabled:cursor-not-allowed ${currentPageIndex == currentButtonIndex ? 'bg-green-100' : 'shadow-lg'}`}
                        >
                            {currentButtonIndex + 1}
                        </button>
                    })}
            </div>
        </SectionContainer>
    )
}