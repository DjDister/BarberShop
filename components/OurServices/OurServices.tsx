import { OurService } from "@/types";
import React from "react";
import DownArrow from "../Icons/DownArrow";
import UpArrow from "../Icons/UpArrow";
import styles from "./OurServices.module.css";

export default function OurServices({
  ourservices,
}: {
  ourservices: OurService[];
}) {
  const [selectedService, setSelectedService] =
    React.useState<OurService | null>(null);
  const [hoveredService, setHoveredService] = React.useState<OurService | null>(
    null
  );

  return (
    <div className={styles.ourservicesContainer}>
      <h1
        className={styles.label}
        style={{
          textAlign: "center",
          fontSize: "2.3rem",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        OUR SERVICES
      </h1>
      <div className={styles.servicesCont}>
        {ourservices.map((ourservice, index) => (
          <div key={index}>
            <button
              style={{
                color:
                  hoveredService === ourservice
                    ? "#396E3D"
                    : selectedService === ourservice
                    ? "#396E3D"
                    : "grey",
              }}
              className={styles.serviceBtn}
              onClick={() => {
                setSelectedService((prev) =>
                  ourservice === prev ? null : ourservice
                );
              }}
              onMouseEnter={() => setHoveredService(ourservice)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {ourservice.title}
              <div className={styles.icons}>
                {selectedService === ourservice ? (
                  <UpArrow
                    fill={
                      hoveredService === ourservice
                        ? "#396E3D"
                        : selectedService === ourservice
                        ? "#396E3D"
                        : "grey"
                    }
                  />
                ) : (
                  <DownArrow
                    fill={
                      hoveredService === ourservice
                        ? "#396E3D"
                        : selectedService === ourservice
                        ? "#396E3D"
                        : "grey"
                    }
                  />
                )}
              </div>
            </button>
            {selectedService === ourservice && (
              <div
                className={styles.serviceContent}
                style={{ height: selectedService === ourservice ? "auto" : 0 }}
              >
                <div className={styles.serviceDescription}>
                  {ourservice.description}
                </div>
                {ourservice.services.map((service, index) => (
                  <div key={index} className={styles.service}>
                    <div className={styles.serviceDetails}>
                      <div className={styles.serviceTitle}>{service.title}</div>
                      -
                      <div className={styles.servicePrice}>${service.cost}</div>
                    </div>
                    <div className={styles.serviceDescription}>
                      {service.description}
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    width: "100%",
                    height: "10px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    backgroundColor: "grey",
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
