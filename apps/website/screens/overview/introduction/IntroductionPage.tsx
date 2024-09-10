import {
  DxcLink,
  DxcHeading,
  DxcParagraph,
  DxcBulletedList,
  DxcFlex,
  useDxcToast,
  DxcButton,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { useEffect, useState } from "react";

const sections = [
  {
    title: "What Halstack is",
    content: (
      <DxcParagraph>
        Halstack is an Open Source Design System built and maintained by DXC Technology with the purpose of providing
        all the necessary tools for designing and implementing accessible, intuitive and consistent User Experiences
        with UXPin and React.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "A tool for designers",
        content: (
          <DxcParagraph>
            Halstack's first goal is to provide Product Designers with pre-created designs for the most common use-cases
            they will face during the product design stage. Using Halstack, they don't need to reinvent the wheel
            looking for a solution to these mundane problems, and can focus on adding business value. Also, by
            centralizing these efforts in a Design System team, we can pay the right amount of attention to aspects as
            important as usability, accessibility, or consistency.
          </DxcParagraph>
        ),
      },
      {
        title: "A tool for developers",
        content: (
          <DxcParagraph>
            Halstack's second goal is to simplify the handoff process from designers to developers, and facilitate the
            development of the components and patterns that already exist as part of the Design System. This way, we
            speed up the development process and minimize the room for errors when implementing these components.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "What Halstack is not",
    subSections: [
      {
        title: "A headless component library",
        content: (
          <>
            <DxcParagraph>
              Unlike headless component libraries like Radix UI or Reach UI, which are intentionally agnostic of design
              decisions, Halstack is a highly opinionated Design System, and most of its value resides in its design
              opinions.
            </DxcParagraph>
            <DxcParagraph>
              Halstack React library does expose a themes API that allows developers to override many of these opinions.
              Still, the themes API has its limitations, and it is considered a work around the Design System guidelines
              to allow a restricted level of white-labeling. That means if you are designing an application and you
              already have strong UI/UX opinions, Halstack might not be the right tool for you.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "A business component library",
        content: (
          <>
            <DxcParagraph>
              All the opinions provided by Halstack Design System always remain within the boundaries of the
              generalistic UI/UX Design domain. Halstack will not get into business-specific elements even if they are
              reusable. For example, Halstack might provide guidelines on using forms within the context of digital
              applications. Still, it doesn't get into the specifics of designing a form for an insurance quote
              application.
            </DxcParagraph>
            <DxcParagraph>
              This design domain is noticeable by looking at the different configuration parameters in the Halstack
              React library, which resemble the language used by UX designers, without ever getting into the business
              semantics.
            </DxcParagraph>
            <DxcParagraph>
              Although it doesn't get into the business domain, Halstack is currently used for the most part by
              insurance applications. For this reason, many of the decisions taken and the patterns observed might be
              influenced by this reality.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "A replacement for the Product Design stage",
        content: (
          <DxcParagraph>
            Halstack should always be considered as assistance to the Product Design process, but never as a
            replacement. Product Designers are still a fundamental piece of this process since they will need to add the
            business context, validate the patterns contemplated by the Design System, and contribute back to the design
            system when necessary.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "Assets",
    subSections: [
      {
        title: "Design Guidelines",
        content: (
          <DxcParagraph>
            These are the pre-defined design opinions explained by writing. They are contained on this website and
            describe, with a high level of detail, aspects like usage, existing variants, or design specifications of
            the identified patterns.
          </DxcParagraph>
        ),
      },
      {
        title: "UXPin",
        content: (
          <DxcParagraph>
            In the past, we used to rely on Adobe XD for our Design UI Kit. But we recently decided to migrate all the
            assets to{" "}
            <DxcLink href="https://www.uxpin.com/" newWindow>
              UXPin
            </DxcLink>{" "}
            to start a new and exciting journey. This decision brings, in addition to the well-known image-based classic
            design library, a new feature, the prototyping library.
          </DxcParagraph>
        ),
        subSections: [
          {
            title: "Classic Design Library",
            content: (
              <DxcParagraph>
                Implementing the previously described Design Guidelines so that product designers can easily drag and
                drop the pre-created components into their designs, obtaining automatic updates of these components as
                the Design System evolves.
              </DxcParagraph>
            ),
          },
          {
            title: "Prototyping Library",
            content: (
              <DxcParagraph>
                The prototyping library is a Halstack CDK component-based design library for fast prototyping, reducing
                the gap between designers and developers. Also,{" "}
                <DxcLink href="https://www.uxpin.com/merge" newWindow>
                  UXPin Merge
                </DxcLink>{" "}
                is a low-code solution that can be leveraged to generate React code on top of Halstack components
                directly from the prototypes.
              </DxcParagraph>
            ),
          },
        ],
      },
      {
        title: "React Library",
        content: (
          <DxcParagraph>
            Including tailored development tools that will assist React developers in implementing Halstack
            applications. This library attempts to bring the Design System guidelines to your application, minimizing
            the effort by abstracting developers from the implementation details while taking the design semantics into
            the code.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "How to use this site",
    content: (
      <>
        <DxcParagraph>
          This website contains essential information for both designers and developers. These are two different types
          of users, but they share a significant part of the journey.
        </DxcParagraph>
        <DxcParagraph>
          Some Design Systems decide to organize their documentation following a development-centric approach, mimicking
          the structure of the development libraries. That is not the case for Halstack. Since the design process starts
          with designs, the Halstack documentation site's main navigation structure follows a design-first approach.
        </DxcParagraph>
        <DxcParagraph>
          Content is always presented and arranged by design elements. Each design page contains not only information
          about usage and design specifications but also technical details about the different tools available for
          developers. These tools will help them implement the corresponding design element.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Legacy documentation sites",
    content: (
      <>
        <DxcParagraph>
          Although this is the current and only documentation we recommend reading while using Halstack Design System,
          the old site is still available through the following links for consulting legacy features and components:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/tools/react" newWindow>
              Previous React documentation
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.dxc.com/tools/angular" newWindow>
              Previous Angular documentation
            </DxcLink>
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          <em>Please note that these sites are discontinued and no longer supported.</em>
        </DxcParagraph>
      </>
    ),
  },
];

const Introduction = () => {
  const [index, setIndex] = useState(1);
  const toast = useDxcToast();

  const success = () => {
    const removeLoadingToast = toast.loading({ message: `Loading an example process ${index}...` });
    setIndex(prevIndex => prevIndex + 1);

    setTimeout(() => {
      removeLoadingToast();
      toast.success({ message: `The process ${index} has been completed successfully.` });
    }, 5000);
  };

  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="row" gap="1rem" alignItems="center" wrap="wrap">
          <DxcButton
            label="Load a process"
            onClick={success}
          />
          <DxcButton
            label="Show default"
            onClick={() =>
              toast.default({
                message: "This is a toast.",
                icon: "rocket_launch",
                action: { label: "Default", onClick() {} },
              })
            }
          />
          <DxcButton
            label="Show success"
            onClick={() => toast.success({ message: "The process completed successfully." })}
          />
          <DxcButton
            label="Show info"
            onClick={() =>
              toast.info({
                message: "The 13.2.0 version of Halstack is now available!",
                action: {
                  label: "Action",
                  onClick() {
                    console.log("Action clicked");
                  },
                },
              })
            }
          />
          <DxcButton
            label="Show warning"
            onClick={() =>
              toast.warning({
                message:
                  "This is a very long toast text, for ellipsis purposes and checks. Halstack is an Open Source Design System built and maintained by DXC Technology with the purpose of providing all the necessary tools for designing and implementing accessible, intuitive and consistent User Experiences with UXPin and React.",
                action: {
                  label: "Action",
                  onClick: () => {
                    console.log("Action clicked");
                  },
                },
              })
            }
          />
        </DxcFlex>
      </PageHeading>
      <p>
        Halstack is an Open Source Design System built and maintained by DXC Technology with the purpose of providing
        all the necessary tools for designing and implementing accessible, intuitive and consistent User Experiences
        with UXPin and React.
      </p>
      <p>
        Halstack's first goal is to provide Product Designers with pre-created designs for the most common use-cases
        they will face during the product design stage. Using Halstack, they don't need to reinvent the wheel looking
        for a solution to these mundane problems, and can focus on adding business value. Also, by centralizing these
        efforts in a Design System team, we can pay the right amount of attention to aspects as important as usability,
        accessibility, or consistency.
      </p>
      <p>
        Halstack's first goal is to provide Product Designers with pre-created designs for the most common use-cases
        they will face during the product design stage. Using Halstack, they don't need to reinvent the wheel looking
        for a solution to these mundane problems, and can focus on adding business value. Also, by centralizing these
        efforts in a Design System team, we can pay the right amount of attention to aspects as important as usability,
        accessibility, or consistency.
      </p>
      <p>
        Halstack's first goal is to provide Product Designers with pre-created designs for the most common use-cases
        they will face during the product design stage. Using Halstack, they don't need to reinvent the wheel looking
        for a solution to these mundane problems, and can focus on adding business value. Also, by centralizing these
        efforts in a Design System team, we can pay the right amount of attention to aspects as important as usability,
        accessibility, or consistency.
      </p>
      <p>
        Halstack's first goal is to provide Product Designers with pre-created designs for the most common use-cases
        they will face during the product design stage. Using Halstack, they don't need to reinvent the wheel looking
        for a solution to these mundane problems, and can focus on adding business value. Also, by centralizing these
        efforts in a Design System team, we can pay the right amount of attention to aspects as important as usability,
        accessibility, or consistency.
      </p>
    </DxcFlex>
  );
};

export default Introduction;
